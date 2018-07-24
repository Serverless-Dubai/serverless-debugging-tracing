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

