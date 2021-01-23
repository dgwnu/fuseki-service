import { execSync } from 'child_process';
import { resolve } from 'path';

/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */
/**
 * NPM Package Imports
 */
var serverFolder = 'fuseki-server';
var serverScript = 'fuseki-server';
function runServer(serverDefaults) {
    var runServerCommand = resolve(__dirname, '..', '..', serverFolder, serverScript);
    if (!serverDefaults) {
        serverDefaults = '--localhost --mem /dgwnu';
    }
    console.log('runServerCommand: ', runServerCommand);
    return execSync(runServerCommand + " " + serverDefaults).toString();
}

export { runServer };
