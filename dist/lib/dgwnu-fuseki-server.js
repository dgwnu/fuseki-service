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
/**
 * NPM Package Imports
 */
const runServerCommand = '../fuseki-server/fuseki-server';
function runServer(serverDefaults) {
    if (!serverDefaults) {
        serverDefaults = '--localhost --mem /dgwnu';
    }
    return child_process_1.execSync(runServerCommand + ' ' + serverDefaults).toString();
}
exports.runServer = runServer;
