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
import * as pm2 from 'pm2';

const serverFolder = 'fuseki-server'; 
const serverScript = 'fuseki-server'; 

/**
 * Run Jena Fuseki Server until terminal session is closed
 * @param serverDefaults Server Parameters replacement for Defaults (--localhost --mem /dgwnu)
 */
export function runServer(args?: string) {
    return execSync(serverScriptPath() + ' ' + serverArgs()).toString()
}

/**
 * Run Jena Fuseki Server until terminal session is closed
 * @param serverDefaults Server Parameters replacement for Defaults (--localhost --mem /dgwnu)
 */
export function startServer(serverDefaults?: string) {
    const execProcess = serverExec(serverDefaults);

}

function serverArgs(args?: string) {

    if (!args) {
        args = '--localhost --mem /dgwnu';
    }

    return args;
}

function serverScriptPath() {
    return resolve(__dirname, '..', '..', serverFolder, serverScript)
}


