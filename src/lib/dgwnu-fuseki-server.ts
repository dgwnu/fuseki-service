/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */

/**
 * Node System Imports
 */
import { execSync } from 'child_process';
import { resolve, join } from 'path';

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
    execSync(join(serverPath(), serverScript) + ' ' + serverArgs());
}

/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
export function startServer(args?: string[]) {
    const startArgs = serverArgs(args);
    console.log(`startArgs: ${startArgs}`);

    connect((err) => {
        if (err) {
          console.error(err);
          process.exit(2);
        }

        start({
                name: 'fuseki-server',
                script: 'java',
                args: ['-jar', 'fuseki-server.jar'].concat(startArgs),
                cwd: resolve(__dirname, '..', '..', serverFolder)
        }, (err) => {
            disconnect();
            if (err) {
                console.log(err.name, err.message);
            } 
        });

    });

}

/**
 * Server start custom args or default args when not supplied
 * @param args Server start custom args
 */
function serverArgs(args?: string[]) {

    if (!args) {
        args = ['--localhost', '--mem /dgwnu'];
    }

    return args;
}

/**
 * Direct path to server install directory
 */
function serverPath() {
    return resolve(__dirname, '..', '..', serverFolder);
}


