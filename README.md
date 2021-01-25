# Fuseki Service
Jena Fuseki Service setup for learning SPARQL, Development and Testing purposes.  
  
Based on Jena Fuseki executbale download release (v3.17.0). The [PM2-package](https://github.com/Unitech/pm2) is used to create a permanent background service.

## Install

````
npm install https://github.com/dgwnu/fuseki-service.git --save
````

## Commands

You can use the service from the command line like this:

````
npx fuseki-service-cli run
````
or in a NPM-script:
````
"scripts": {
    ...
    "cli:run": "fuseki-service-cli run",
    ...
````

| Command | Function |
|---------|:------------|
| run (_args_) | Run Fuseki Service in a terminal session (stops after closing terminal session) |
| start (_args_) | Start Fuseki as PM2 Service (permanent in the background) |
| stop | Stop Fuseki as PM2 Service |
| restart | Restart Fuseki as PM2 Service |

The Jena Fuseki Server server will execute with default _arg(ument)s_ for the __run__ and __start__ commands:

- -- localhost 
- --mem /dgwnu

You can replace the default _args_ with all possible args that are available. See options by running the following at the command line:
````
npx fuseki-service-cli run --help
````

## TypeScript Library Support

It is possible to import the commands and use these for Node-based TypeScript applications:
````
import { startServer } from '../lib';

...
        startServer(serverArgs).subscribe({
            next: () => console.log('Server Started!'),
            error: (err) => console.error(err)
        });
...

````