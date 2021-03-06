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
import { Observable } from 'rxjs';

const serverName = 'fuseki-server';
const serverFolder = 'fuseki-server'; 
const serverScript = 'fuseki-server'; 

/**
 * Run Jena Fuseki Server until terminal session is closed
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 * @returns run feedback output
 */
export function runServer(args?: string[]) {
    const runArgs = serverArgs(args).join(' ');
    console.log(`startArgs: ${runArgs}`);
    return execSync(join(serverPath(), serverScript) + ' ' + runArgs).toString('utf-8');
}

/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
export function startServer(args?: string[]) {
    const startArgs = serverArgs(args);
    console.log(`startArgs: ${startArgs.join(' ')}`);

    return new Observable<void>(observer => {

        connect((err) => {

            if (err) {
                observer.error(err);
                process.exit(2);
            }

            start({
                name: serverName,
                script: 'java',
                args: ['-jar', serverScript + '.jar'].concat(startArgs),
                cwd: resolve(__dirname, '..', '..', serverFolder)
            }, (err) => {
                disconnect();

                if (err) {
                    observer.error(err);
                }

                observer.next();
                observer.complete();
            });

        });

    });

}

/**
 * Restart Jena Fuseki Server with PM2
 */
export function restartServer() {

    return new Observable<void>(observer => {

        connect((err) => {

            if (err) {
                observer.error(err);
                process.exit(2);
            }

            restart(serverName, (err) => {
                disconnect();

                if (err) {
                    observer.error(err);
                }

                observer.next();
                observer.complete();
            });

        });

    });

}

/**
 * Stop Jena Fuseki Server with PM2
 */
export function stopServer() {
    
    return new Observable<void>(observer => {

        connect((err) => {

            if (err) {
                observer.error(err);
                process.exit(2);
            }

            stop(serverName, (err) => {
                disconnect();

                if (err) {
                    observer.error(err);
                }

                observer.next();
                observer.complete();
            });

        });

    });

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


