# fuseki-service
Jena Fuseki Service setup for learning SPARQL, Development and Testing purposes

## NPM Install

````
npm install https://github.com/dgwnu/fuseki-service.git --save
````

## How to start the Fuseki Service

After install the Jena Fuseki Executables and Script are downloaded and extracted to a __fuseki-server/__ directory/folder within the current path.  
  
From there you can start the serices like for example:

- __java -jar fuseki-server/fuseki-server.jar --localhost --ping --stats --metrics --mem dgwnu.__ (running server on localhost with ping, stats and metrics on, and a memory dataset named "dgwnu")