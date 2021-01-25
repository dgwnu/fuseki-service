#!/usr/bin/env node
/**
 * Run Fuseki
 */
"use strict"

/**
 * Node Package Modules
 */
import { argv } from 'process';

/**
 * CLI Library Modules
 */
import { runServer, startServer, restartServer, stopServer } from '../lib'

//
// START CLI Script
//
const command = argv[2];
let serverArgs: string[];

if (argv.length > 3) {
    serverArgs = argv.slice(4, argv.length - 1);
}

console.log(`DGWNU - Fuseki Service - ${command} ${serverArgs ? serverArgs.join(' ') : ''}`);

switch (command) {

    case 'run': {
        const output = runServer(serverArgs);
        console.log(output);
        break;
    }

    case 'start': {
        startServer(serverArgs).subscribe({
            next: () => console.log('Server Started!'),
            error: (err) => console.error(err)
        });
        break;
    }

    case 'restart': {
        restartServer().subscribe({
            next: () => console.log('Server Restarted!'),
            error: (err) => console.error(err)
        });
        break;
    }

    case 'stop': {
        stopServer().subscribe({
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

//
// END CLI Script
//
