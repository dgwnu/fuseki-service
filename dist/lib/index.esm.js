import { execSync } from 'child_process';
import { join, resolve } from 'path';
import { connect, start, disconnect, restart, stop } from 'pm2';

/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */
var serverName = 'fuseki-server';
var serverFolder = 'fuseki-server';
var serverScript = 'fuseki-server';
/**
 * Run Jena Fuseki Server until terminal session is closed
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 */
function runServer(args) {
    var output = execSync(join(serverPath(), serverScript) + ' ' + serverArgs(args).join(' '));
    console.log(output.toString());
}
/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
function startServer(args) {
    var startArgs = ['-jar', serverScript + '.jar'].concat(serverArgs(args));
    console.log("startArgs: " + startArgs);
    connect(function (err) {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        start({
            name: serverName,
            script: 'java',
            args: startArgs,
            cwd: resolve(__dirname, '..', '..', serverFolder)
        }, function (err) {
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
function restartServer() {
    connect(function (err) {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        restart(serverName, function (err) {
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
function stopServer() {
    connect(function (err) {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        stop(serverName, function (err) {
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
