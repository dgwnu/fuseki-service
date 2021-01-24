# fuseki-service
Jena Fuseki Service setup for learning SPARQL, Development and Testing purposes.  
  
Using the NPM processmonitor [PM2](https://github.com/Unitech/pm2) it is possible to start the Fuseki Service permanent as a background service.

## Install

````
npm install https://github.com/dgwnu/fuseki-service.git --save
````

## Fuseki Service Commands

You can use the serice like this:

````
npx fuseki-service-cli run | start | restart | stop
````

| Command | Function |
|---------|:------------|
| run | Run Fuseki Service in open terminal session (stops after closing terminal session) |
| server | Fuseki Server Configuration |
  
In this pre-release the Jena Fuseki Server server will execute with default cli settings: _localhost with ping, stats and metrics on, and a memory dataset named "dgwnu"_. In next releases will suppor all basic settings that is available from basic Open Source versions.