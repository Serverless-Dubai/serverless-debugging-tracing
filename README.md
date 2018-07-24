## Step 1: inital starting point.


* create a stream
* set stream in public.env.yml

## Step 2:  debugging with invoke local

1. run invoke local as example

`sls invoke local -f hello -d {}`

2. add serverless as dev dependency
3. create launch config in VS code
4. set breakpoint and run debug
5. add lauch config for processor
  * get sample event from logs of former invokation
  * write kinesis event to file samples/processor_event.json
  * add launch config to .vscode/launch.json

```json
        {
            "type": "node",
            "request": "launch",
            "name": "Debug serverless processor function    ",
            "program": "${workspaceFolder}/node_modules/.bin/sls",
            "args": [
                "invoke",
                "local",
                "-f",
                "processor",
                "-p",
                "samples/processor_event.json"
            ]
        }
```



## Step 2.1: debugging with serverless offline



## Step 3: logging 

1. add code which causes error, here division by zero
2. call endpoint; internal error will be in error statistics
3. handle error with try / catch
4. add callback(err) to catch block

## Step 3.1: error reporting

1. install serverless-plugin-aws-alerts plugin
  * ` npm i serverless-plugin-aws-alerts --save`
2. add plugin, custom section and alert for function. [plugin reference](https://github.com/ACloudGuru/serverless-plugin-aws-alerts)
3. verfiy that SNS topic is created, confirm email
4. call endpoint multiple times and confirm to get notification

## Step 4: AWS X-Ray

1. install x-ray sdk
  * `npm i aws-xray-sdk --save`
2. setup function for tracing
  * require xray sdk `const AWSXRay = require('aws-xray-sdk');`
  * set tracing for https `const https   = AWSXRay.captureHTTPs(require('https'));`