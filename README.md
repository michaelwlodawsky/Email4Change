# Email4Change
A politician will answer to 400 emails more than they will 10,000 names on a single petition.

# If Gatsby is giving you shit regarding any modules

```shell
rm -rf node_modules package-lock.json ; yarn install
```

# Command to add dependency to lambda function
`pip install --target ./package <dependency name>`

# Command to deploy the lambda function
`zip <file_name>.zip link_gen.py; cd package; zip -r9 ../<file_name>.zip .; cd ..; aws lambda update-function-code --function-name arn:aws:lambda:us-east-2:657963827049:function:e4c_generate_email_link --zip-file fileb://link_gen.zip`

# Command to test lambda function
`aws lambda invoke --function-name <function_arn> --payload '{ "key1": "value1", "key2": "value2" ...}' --cli-binary-format raw-in-base64-out <output_file>.json`
