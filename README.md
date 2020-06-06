# Email4Change
A politician will answer to 400 emails more than they will 10,000 names on a single petition.

# Command to add dependency to lambda function
`pip install --target ./package <dependency name>`

# Command to deploy the lambda function
`zip <file_name>.zip link_gen.py; cd package; zip -r9 ../<file_name>.zip .; cd ..; aws lambda update-function-code --function-name arn:aws:lambda:us-east-2:657963827049:function:e4c_generate_email_link --zip-file fileb://link_gen.zip`
