#!/usr/bin/env node

const pid = parseInt(process.argv[2]);

if (process.argv.length === 3 && pid > 0) {
  try {
    process._debugProcess(pid);
    console.log('Debugger listener started successfully.');
  } catch (err) {
    console.log('Failed to send signal to process:', err.message);
  }
} else {
  console.log('\nThis tool is used to start the debugger listener in a running Node.js process.');
  console.log('\nUsage: inspect [process id]');
}
