# late-inspect 

Start the debugger listener on an already running Node.js process.

## Installation

Can be installed globally:
```sh
$ npm install -g late-inspect
```
Or as a local tool on the project directory:
```sh
$ npm install --save late-inspect
```
## Usage

When installed globally:
```bash
$ inspect [process id]
```
When installed locally from the project directory:
```bash
$ ./node_modules/.bin/inspect [process id]
```

Will signal a running Node.js process with that id to start the debugger listener.
Same effect as running with the --inspect flag without the need to restart the process.

Works on Windows, Mac and Unix systems.  

## License

[ISC](LICENSE)
