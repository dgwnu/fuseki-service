#!/usr/bin/env node
/**
 * Run Fuseki
 */
"use strict"

/**
 * Node Package Modules
 */
import { argv } from 'process';
import * as Colors from 'colors';

/**
 * CLI Library Modules
 */
import * as lib from '../lib'

/**
 * colors constant that is used for console.log()
 * Based on <https://www.voidcanvas.com/make-console-log-output-colorful-and-stylish-in-browser-node/>
 */
const colors = Colors;

//
// START CLI Script
//
const command = argv[2];
let serverArgs: string[];

if (argv.length > 3) {
    serverArgs = argv.slice(3, argv.length);
}

console.log(`DGWNU - Fuseki Service - ${command} ${serverArgs ? serverArgs.join(' ') : ''}`.bgRed.yellow.bold);

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
        console.log('\nNot a valid parameter command line argument. Please use:\n'.bold);
        console.log('fuseki-service run          Run Fuseki Server in a Terminal Session (terminated after closing)'.red);
        console.log('fuseki-service run --help   For all available Fuseki Server Options'.green);
        console.log('fuseki-service start        Start Fuseki Server as a permanent PM2 deamon'.blue);
        console.log('fuseki-service stop         Stop Fuseki Server as a permanent PM2 deamon'.blue);
        console.log('fuseki-service restart      Restart Fuseki Server as a permanent PM2 deamon'.blue);
        break;
    }
}

//
// END CLI Script
//
