import json
import requests

# Codes for special characters that could be in an email body
url_codes = {
    " ": "20",
    "\n": "0A",
    "%": "25",
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

VAR_CONCATENATOR = "&"
CC = "cc"
BCC = "bcc"
SUBJECT = "subject"
MESSAGE = "body"
TO = "to"

# Going to require a minimum of a message and recipient
def lambda_handler(event, context):
    body: dict = json.loads(event.body)
    message: str = body.get(MESSAGE, "")

    for symbol in url_codes:
        message = message.replace(symbol, "%"+url_codes[symbol])

    link: str = "mailto:" + body.get(TO) + "?" + SUBJECT + "=" + body.get(SUBJECT) + VAR_CONCATENATOR + MESSAGE + "=" + message

    if CC in body.keys:
        link += VAR_CONCATENATOR + CC + "=" + body.get(CC)

    if BCC in body.keys:
        link += VAR_CONCATENATOR + BCC + "=" + body.get(BCC)

    
    response = requests.get("http://tinyurl.com/api-create.php?url=" + link)
    

    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }