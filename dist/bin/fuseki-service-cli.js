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
let parms = [];
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
        output = lib_1.runServer();
        break;
    }
    default: {
        output = lib_1.runServer();
        break;
    }
}
console.log(output);
