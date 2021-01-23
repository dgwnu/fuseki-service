#!/usr/bin/env node
/**
 * Run Fuseki
 */
"use strict"

/**
 * Node Package Modules
 */
import { argv } from 'process';
import { inspect } from 'util';
import { Observable, throwError } from 'rxjs';

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

switch (command) {

    case 'run': {

        break;
    }

    default: {

        break;
    }
}
//
// END CLI Script
//

