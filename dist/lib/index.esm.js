import { execSync } from 'child_process';

/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */
/**
 * NPM Package Imports
 */
var runServerCommand = '../fuseki-server/fuseki-server';
function runServer(serverDefaults) {
    if (!serverDefaults) {
        serverDefaults = '--localhost --mem /dgwnu';
    }
    return execSync(runServerCommand + ' ' + serverDefaults).toString();
}

export { runServer };
