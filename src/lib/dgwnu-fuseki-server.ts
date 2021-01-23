/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */

/**
 * Node System Imports
 */
import { execSync } from 'child_process';
import { resolve } from 'path';

/**
 * NPM Package Imports
 */

const serverFolder = 'fuseki-server'; 
const serverScript = 'fuseki-server'; 

export function runServer(serverDefaults?: string) {
    const runServerCommand = resolve(__dirname, '..', '..', serverFolder, serverScript);

    if (!serverDefaults) {
        serverDefaults = '--localhost --mem /dgwnu';
    }

    console.log('runServerCommand: ', runServerCommand);

    return execSync(`${runServerCommand} ${serverDefaults}`).toString();
}
