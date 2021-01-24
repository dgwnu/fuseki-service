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
import { start, connect, disconnect } from 'pm2';

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
    const startScript = serverScriptPath();
    const startArgs = ['--localhost'];
    console.log(`script: ${startScript} args: ${startArgs}`);

    connect((err) => {
        if (err) {
          console.error(err);
          process.exit(2);
        }

        start({
                name: 'fuseki-server',
                script: 'java',
                args: ['-jar', 'fuseki-server.jar' , '--localhost'],
                cwd: resolve(__dirname, '..', '..', serverFolder)
        }, (err) => {
            disconnect();
            if (err) {
                console.log(err.name, err.message);
            } 
        });

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


