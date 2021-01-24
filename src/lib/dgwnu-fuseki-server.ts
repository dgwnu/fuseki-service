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
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 */
export function runServer(args?: string) {
    execSync(serverScriptPath() + ' ' + serverArgs());
}

/**
 * Start Jena Fuseki Server witk PM2
 * @args  Server Arguments. Defaults = --localhost --mem /dgwnu
 */
export function startServer(args?: string) {
    pm2.connect(err => {
        if (err) {
          console.error(err);
          process.exit(2);
        } else {
            pm2.start({
                name: 'dgwnu-fuseki-server',
                script: serverScriptPath(),
                args: serverArgs()
            }, (err, apps) => {
                pm2.disconnect();
            });
        }
    });
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


