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
import { runServer } from '../lib'

//
// START CLI Script
//
const command = argv[2];
let parms: string[] = [];

/*
if (argv[3]) {
    parms.push(argv[3]);
}

if (argv[4]) {
    parms.push(argv[4]);
}
*/

console.log(`DGWNU - Fuseki Service - ${command} ${parms}`);

let output = '';

switch (command) {

    case 'run': {
        output = runServer();
        break;
    }

    default: {
        output = runServer();
        break;
    }
}

console.log(output);
//
// END CLI Script
//
