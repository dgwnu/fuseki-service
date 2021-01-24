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
| run | Run Fuseki Service in a terminal session (stops after closing terminal session) |
| start | Start Fuseki as PM2 Service (permanent in the background) |
| stop | Stop Fuseki as PM2 Service |
| restart | Restart Fuseki as PM2 Service |

  
In this pre-release the Jena Fuseki Server server will execute with default cli settings: _localhost with ping, stats and metrics on, and a memory dataset named "dgwnu"_.  
Next releases will suppor all basic settings that is available from basic Open Source versions.