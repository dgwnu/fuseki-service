"use strict";
/**
 * Generic DGWNU Paackte TypeScript Tripple Store Utilities
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
/**
 * Node System Imports
 */
const child_process_1 = require("child_process");
const path_1 = require("path");
/**
 * NPM Package Imports
 */
const serverFolder = 'fuseki-server';
const serverScript = 'fuseki-server';
function runServer(serverDefaults) {
    const runServerCommand = path_1.resolve(__dirname, '..', '..', serverFolder, serverScript);
    if (!serverDefaults) {
        serverDefaults = '--localhost --mem /dgwnu';
    }
    console.log('runServerCommand: ', runServerCommand);
    return child_process_1.execSync(`${runServerCommand} ${serverDefaults}`).toString();
}
exports.runServer = runServer;
