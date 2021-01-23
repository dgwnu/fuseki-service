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

/**
 * Run Jena Fuseki Server until terminal session is closed
 * @param serverDefaults Server Parameters replacement for Defaults (--localhost --mem /dgwnu)
 */
export function runServer(serverDefaults?: string) {
    return execSync(serverExec(serverDefaults)).toString()
}

function serverExec(serverDefaults?: string) {
    const runServerCommand = resolve(__dirname, '..', '..', serverFolder, serverScript);

    if (!serverDefaults) {
        serverDefaults = '--localhost --mem /dgwnu';
    }

    return `${runServerCommand} ${serverDefaults}`;
}
