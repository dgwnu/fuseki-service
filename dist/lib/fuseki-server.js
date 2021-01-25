"use strict";
/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopServer = exports.restartServer = exports.startServer = exports.runServer = void 0;
/**
 * Node System Imports
 */
const child_process_1 = require("child_process");
const path_1 = require("path");
/**
 * NPM Package Imports
 */
const pm2_1 = require("pm2");
const rxjs_1 = require("rxjs");
const serverName = 'fuseki-server';
const serverFolder = 'fuseki-server';
const serverScript = 'fuseki-server';
/**
 * Run Jena Fuseki Server until terminal session is closed
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 * @returns run feedback output
 */
function runServer(args) {
    const runArgs = serverArgs(args).join(' ');
    console.log(`startArgs: ${runArgs}`);
    return child_process_1.execSync(path_1.join(serverPath(), serverScript) + ' ' + runArgs).toString('utf-8');
}
exports.runServer = runServer;
/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
function startServer(args) {
    const startArgs = serverArgs(args);
    console.log(`startArgs: ${startArgs.join(' ')}`);
    return new rxjs_1.Observable(observer => {
        pm2_1.connect((err) => {
            if (err) {
                observer.error(err);
                process.exit(2);
            }
            pm2_1.start({
                name: serverName,
                script: 'java',
                args: ['-jar', serverScript + '.jar'].concat(startArgs),
                cwd: path_1.resolve(__dirname, '..', '..', serverFolder)
            }, (err) => {
                pm2_1.disconnect();
                if (err) {
                    observer.error(err);
                }
                observer.next();
                observer.complete();
            });
        });
    });
}
exports.startServer = startServer;
/**
 * Restart Jena Fuseki Server with PM2
 */
function restartServer() {
    return new rxjs_1.Observable(observer => {
        pm2_1.connect((err) => {
            if (err) {
                observer.error(err);
                process.exit(2);
            }
            pm2_1.restart(serverName, (err) => {
                pm2_1.disconnect();
                if (err) {
                    observer.error(err);
                }
                observer.next();
                observer.complete();
            });
        });
    });
}
exports.restartServer = restartServer;
/**
 * Stop Jena Fuseki Server with PM2
 */
function stopServer() {
    return new rxjs_1.Observable(observer => {
        pm2_1.connect((err) => {
            if (err) {
                observer.error(err);
                process.exit(2);
            }
            pm2_1.stop(serverName, (err) => {
                pm2_1.disconnect();
                if (err) {
                    observer.error(err);
                }
                observer.next();
                observer.complete();
            });
        });
    });
}
exports.stopServer = stopServer;
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
    return path_1.resolve(__dirname, '..', '..', serverFolder);
}
