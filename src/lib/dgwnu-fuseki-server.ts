/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */

/**
 * Node System Imports
 */
import { execSync } from 'child_process';

/**
 * NPM Package Imports
 */

const runServerCommand = '../fuseki-server/fuseki-server'; 

export function runServer(serverDefaults?: string) {

    if (!serverDefaults) {
        serverDefaults = '--localhost --mem /dgwnu';
    }

    return execSync(runServerCommand + ' ' + serverDefaults).toString();
}
