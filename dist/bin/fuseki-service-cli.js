#!/usr/bin/env node
/**
 * Run Fuseki
 */
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Node Package Modules
 */
const process_1 = require("process");
const Colors = __importStar(require("colors"));
const colors = Colors;
/**
 * CLI Library Modules
 */
const lib = __importStar(require("../lib"));
//
// START CLI Script
//
const command = process_1.argv[2];
let serverArgs;
if (process_1.argv.length > 3) {
    serverArgs = process_1.argv.slice(3, process_1.argv.length);
}
console.log(`DGWNU - Fuseki Service - ${command} ${serverArgs ? serverArgs.join(' ') : ''}`);
switch (command) {
    case 'run': {
        const output = lib.runServer(serverArgs);
        console.log(output);
        break;
    }
    case 'start': {
        lib.startServer(serverArgs).subscribe({
            next: () => console.log('Server Started!'),
            error: (err) => console.error(err)
        });
        break;
    }
    case 'restart': {
        lib.restartServer().subscribe({
            next: () => console.log('Server Restarted!'),
            error: (err) => console.error(err)
        });
        break;
    }
    case 'stop': {
        lib.stopServer().subscribe({
            next: () => console.log('Server Stopped!'),
            error: (err) => console.error(err)
        });
        break;
    }
    default: {
        console.log('\nNot a valid parameter command line argument. Please use:\n');
        console.log('fuseki-service run          Run Fuseki Server in a Terminal Session (terminated after closing)'.red);
        console.log('fuseki-service run --help   For all available Fuseki Server Options');
        console.log('fuseki-service start        Start Fuseki Server as a permanent PM2 deamon');
        console.log('fuseki-service stop         Stop Fuseki Server as a permanent PM2 deamon');
        console.log('fuseki-service restart      Restart Fuseki Server as a permanent PM2 deamon');
        break;
    }
}
