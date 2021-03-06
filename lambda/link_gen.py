import json
import requests
import boto3
import pymysql
import logging
import rds_config

logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Codes for special characters that could be in an email body
url_codes = {
    " ": "20",
    "\n": "0A",
    "$": "24",
    "&": "26",
    "+": "2B",
    ",": "2C",
    "/": "2F",
    ":": "3A",
    ";": "3B",
    "=": "3D",
    "?": "3F",
    "@": "40",
    "\"": "22",
    "<": "3C",
    ">": "3E",
    "#": "23",
    "{": "7B",
    "}": "7D",
    "|": "7C",
    "\\": "5C",
    "^": "5E",
    "~": "7E",
    "[": "5B",
    "]": "5D",
    "`": "60"
}

PERCENT = "%"
PERCENT_ENCODING = "%25"

VAR_CONCATENATOR = "&"
CC = "cc"
BCC = "bcc"
SUBJECT = "subject"
MESSAGE = "body"
TO = "to"
EMAIL = "email"
CUSTOM_EMAIL = "customEmail"

# Going to require a minimum of a message and recipient
def lambda_handler(event, context):
    message: str = event.get(MESSAGE, "")
    subject: str = event.get(SUBJECT, "")
    isCustomEmail: bool = event.get(CUSTOM_EMAIL, False)

    # Check for percent signs first, because percent signs will be used to encode the rest of the URL
    message = message.replace(PERCENT, PERCENT_ENCODING)
    subject = subject.replace(PERCENT, PERCENT_ENCODING)


    for symbol in url_codes:
       message = message.replace(symbol, "%"+url_codes[symbol])

    for symbol in url_codes:
       subject = subject.replace(symbol, "%"+url_codes[symbol])

    link: str = "mailto:" + event.get(TO) + "?" + MESSAGE + "=" + message

    if SUBJECT in event:
        link += VAR_CONCATENATOR + SUBJECT + "=" + subject

    if CC in event:
        link += VAR_CONCATENATOR + CC + "=" + event.get(CC)

    if BCC in event:
        link += VAR_CONCATENATOR + BCC + "=" + event.get(BCC)

    if isCustomEmail:
        try:
            rds_host = rds_config.db_endpoint
            username = rds_config.db_username
            password = rds_config.db_password
            db_name = rds_config.db_name
            connection = pymysql.connect(rds_host, user=username, passwd=password, db=db_name, connect_timeout=5)
        except pymysql.MySQLError as err:
            logger.error("Couldn't connect to MySQL database on RDS.")
            logger.error(err)
            return {
                'statusCode': 500,
                'body': 'Sorry, there was an error connecting the the RDS instance.'
            }

        logger.info("Connected to rds successfully")

    else:
        response = requests.get("http://tinyurl.com/api-create.php?url=" + link)

        if response.status_code != 200:
            return {
                'statusCode': 500,
                'body': "Sorry, there was an error retreiving the generated link from tinyurl."
            }
        else:
            return {
                'statusCode': 200,
                'body': response.text
            }