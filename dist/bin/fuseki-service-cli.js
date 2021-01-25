#!/usr/bin/env node
/**
 * Run Fuseki
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Node Package Modules
 */
const process_1 = require("process");
/**
 * CLI Library Modules
 */
const lib_1 = require("../lib");
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
        const output = lib_1.runServer(serverArgs);
        console.log(output);
        break;
    }
    case 'start': {
        lib_1.startServer(serverArgs).subscribe({
            next: () => console.log('Server Started!'),
            error: (err) => console.error(err)
        });
        break;
    }
    case 'restart': {
        lib_1.restartServer().subscribe({
            next: () => console.log('Server Restarted!'),
            error: (err) => console.error(err)
        });
        break;
    }
    case 'stop': {
        lib_1.stopServer().subscribe({
            next: () => console.log('Server Stopped!'),
            error: (err) => console.error(err)
        });
        break;
    }
    default: {
        console.error(`Unknown Command: ${command}`);
        break;
    }
}
