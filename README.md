# Email4Change
A politician will answer to 400 emails more than they will 10,000 names on a single petition.

## Intro

Email4Change is a completely open-source website. This is a non-profit website. All who wish to contribute must have their changes reviewed and approved by @michaelwlodawsky.

## Starting Development

### Installations
#### If you have AWS CLI, NodeJS, Gatsby, Python, Virtualenv: Skip this section
**Note:** You will be using your own AWS Account for development; guides to setup you resources will be [later in the README](#aws-setup). Be mindful of your personal AWS usage, charges are **NOT** reimbursed!!

- [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- [NodeJS Installation Guide](https://nodejs.org/en/download/)
- [Python 3.7+ Installation Guide](https://www.python.org/downloads/)

Install Gatsby:
```
npm install --save gatsby-cli
```

Install Virtualenv (This is what you should be using to host your lambda development environment locally):
```
pip install virtualenv
```

### AWS Setup
This setup assumes you have created an AWS Account for personal use, have linked a credit card, and that you have valid access to the AWS Console.

#### Lambda Setup
TODO

#### API Gateway Setup
Note: You will need your lambda(s) setup in order to complete this step.<br>
TODO

#### RDS Setup
Note: You will need your lambda(s) setup in order to complete this step.<br>
TODO

## Help Quick-Guide

### If Gatsby is giving issues regarding missing modules

```shell
rm -rf node_modules package-lock.json ; yarn install
```

### Command to add dependency to lambda function
`pip install --target ./package <dependency name>`

### Command to deploy the lambda function
`zip <file_name>.zip link_gen.py; cd package; zip -r9 ../<file_name>.zip .; cd ..; aws lambda update-function-code --function-name arn:aws:lambda:us-east-2:657963827049:function:e4c_generate_email_link --zip-file fileb://link_gen.zip`

### Command to test lambda function
`aws lambda invoke --function-name <function_arn> --payload '{ "key1": "value1", "key2": "value2" ...}' --cli-binary-format raw-in-base64-out <output_file>.json`
