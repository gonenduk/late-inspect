# late-inspect 

Start the debugger listener on an already running Node.js process.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

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
  
## Obtaining Process ID 

To get a list of running Node.js process ids:
```bash
$ inspect --list
```
Will return a list of all running Node.js processes with their process id, command and arguments list. 

For more available options run with -h or --help
## License

[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/late-inspect.svg
[npm-url]: https://npmjs.org/package/late-inspect
[downloads-image]: https://img.shields.io/npm/dt/late-inspect.svg
[downloads-url]: https://npmjs.org/package/late-inspect
