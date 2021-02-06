# Fuseki Service Development

Information about the setup of this package.  
  
Build all Script:  ````npm run build````

## Jena Fuseki Server Executable

Basic Open Source Jena Fuseki Java Archive (dowloaded and extracted post-install) is used to create the server.
  
PM2 Package provides the server demaon functionality in the CLI.

## Fuseki Service CLI

CLI Build Script:  ````npm run build:cli````
  
TS-NODE Development Configuration  
````
ts-node-config.json
````
  
CLI TypeScript Compiler Configuration
````
ts-cli-config.ts
````

## TypeScript Library

Based on [example from Alejandro](https://aganglada.com/blog/how-to-create-your-own-typescript-library/)  
  
LIB Build Script:  ````npm run build:lib````
  
Configuration files  
````
rollup.config.js
ts-lib-config.json
````
