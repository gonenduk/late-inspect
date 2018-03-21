#!/usr/bin/env node
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'pid', type: Number, defaultOption: true },
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'list', alias: 'l', type: Boolean },
  { name: 'version', alias: 'v', type: Boolean }
];

try {
  const options = commandLineArgs(optionDefinitions);

  if (options.help || Object.keys(options).length === 0) printUsage();
  else if (options.version) printVersion();
  else if (options.list) printList();
  else if (options.pid > 0) signalProcess(options.pid);
  else console.log('Invalid process id');
}
catch (err) {
  console.log(err.message);
}

function printUsage() {
  console.log('\nThis tool is used to start the debugger listener in a running Node.js process.');
  console.log('\nUsage: inspect [options] [process id]');
  console.log('\nOptions:');
  console.log('\t-h, --help\tusage information');
  console.log('\t-l, --list\tlist of node processes');
  console.log('\t-v, --version\tversion number');
}

function printVersion() {
  console.log('Version 1.1.0');
}

function printList() {
  console.log('printing list...');
}

function signalProcess(pid) {
  try {
    process._debugProcess(pid);
    console.log('Debugger listener started successfully.');
  } catch (err) {
    console.log('Failed to send signal to process:', err.message);
  }
}
