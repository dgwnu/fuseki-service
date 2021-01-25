import { execSync } from 'child_process';
import { join, resolve } from 'path';
import { connect, start, disconnect, restart, stop } from 'pm2';
import { Observable } from 'rxjs';

/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */
var serverName = 'fuseki-server';
var serverFolder = 'fuseki-server';
var serverScript = 'fuseki-server';
/**
 * Run Jena Fuseki Server until terminal session is closed
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 * @returns run feedback output
 */
function runServer(args) {
    var runArgs = serverArgs(args).join(' ');
    console.log("startArgs: " + runArgs);
    return execSync(join(serverPath(), serverScript) + ' ' + runArgs).toString('utf-8');
}
/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
function startServer(args) {
    var startArgs = serverArgs(args);
    console.log("startArgs: " + startArgs.join(' '));
    return new Observable(function (observer) {
        connect(function (err) {
            if (err) {
                observer.error(err);
                process.exit(2);
            }
            start({
                name: serverName,
                script: 'java',
                args: ['-jar', serverScript + '.jar'].concat(startArgs),
                cwd: resolve(__dirname, '..', '..', serverFolder)
            }, function (err) {
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
function restartServer() {
    return new Observable(function (observer) {
        connect(function (err) {
            if (err) {
                observer.error(err);
                process.exit(2);
            }
            restart(serverName, function (err) {
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
function stopServer() {
    return new Observable(function (observer) {
        connect(function (err) {
            if (err) {
                observer.error(err);
                process.exit(2);
            }
            stop(serverName, function (err) {
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
function serverArgs(args) {
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

export { restartServer, runServer, startServer, stopServer };
