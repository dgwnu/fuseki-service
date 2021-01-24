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
const serverName = 'fuseki-server';
const serverFolder = 'fuseki-server';
const serverScript = 'fuseki-server';
/**
 * Run Jena Fuseki Server until terminal session is closed
 * @args Server Arguments. Defaults = --localhost --mem /dgwnu
 */
function runServer(args) {
    const output = child_process_1.execSync(path_1.join(serverPath(), serverScript) + ' ' + serverArgs(args).join(' '));
    console.log(output.toString());
}
exports.runServer = runServer;
/**
 * Start Jena Fuseki Server witk PM2
 * @args  Custom Server Arguments. Default = --localhost --mem /dgwnu
 */
function startServer(args) {
    const startArgs = ['-jar', serverScript + '.jar'].concat(serverArgs(args));
    console.log(`startArgs: ${startArgs}`);
    pm2_1.connect((err) => {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        pm2_1.start({
            name: serverName,
            script: 'java',
            args: startArgs,
            cwd: path_1.resolve(__dirname, '..', '..', serverFolder)
        }, (err) => {
            pm2_1.disconnect();
            if (err) {
                console.log(err.name, err.message);
            }
        });
    });
}
exports.startServer = startServer;
/**
 * Restart Jena Fuseki Server with PM2
 */
function restartServer() {
    pm2_1.connect((err) => {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        pm2_1.restart(serverName, (err) => {
            pm2_1.disconnect();
            if (err) {
                console.log(err.name, err.message);
            }
        });
    });
}
exports.restartServer = restartServer;
/**
 * Stop Jena Fuseki Server with PM2
 */
function stopServer() {
    pm2_1.connect((err) => {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        pm2_1.stop(serverName, (err) => {
            pm2_1.disconnect();
            if (err) {
                console.log(err.name, err.message);
            }
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
