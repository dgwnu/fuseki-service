# fuseki-service
Jena Fuseki Service setup for learning SPARQL, Development and Testing purposes

## NPM Install

````
npm install https://github.com/dgwnu/fuseki-service.git --save
````
_Post install the Jena Fuseki (3.17.0) executable will be downloaded and extracted that will be used to run te service._

## Run the Fuseki Service

You can start the serice like this:

````
npx fuseki-service-cli run
````
This will run a Fuseki Server server with default cli settings: _localhost with ping, stats and metrics on, and a memory dataset named "dgwnu"_.

