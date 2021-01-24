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
import { start, connect, disconnect, restart, stop } from 'pm2';

const serverName = 'fuseki-server';
const serverFolder = 'fuseki-server'; 
const serverScript = 'fuseki-server'; 

/**
 * Run Jena Fuseki Server until terminal session is closed
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 */
export function runServer(args?: string[]) {
    const output = execSync(join(serverPath(), serverScript) + ' ' + serverArgs(args).join(' '));
    console.log(output.toString());
}

/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
export function startServer(args?: string[]) {
    const startArgs = ['-jar', serverScript + '.jar'].concat(serverArgs(args));
    console.log(`startArgs: ${startArgs}`);

    connect((err) => {
        if (err) {
          console.error(err);
          process.exit(2);
        }

        start({
            name: serverName,
            script: 'java',
            args: startArgs,
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
 * Restart Jena Fuseki Server with PM2
 */
export function restartServer() {
    connect((err) => {
        if (err) {
          console.error(err);
          process.exit(2);
        }

        restart(serverName, (err) => {
            disconnect();
            if (err) {
                console.log(err.name, err.message);
            }
        });

    });
}

/**
 * Stop Jena Fuseki Server with PM2
 */
export function stopServer() {

}

/**
 * Server start custom args or default args when not supplied
 * @param args Server start custom args
 */
function serverArgs(args?: string[]) {

    if (!args) {
        args = ['--localhost', '--mem', '/dgwnu'];
    }

    return args;
}

/**
 * Direct path to server install directory
 */
function serverPath() {
    return resolve(__dirname, '..', '..', serverFolder);
}


