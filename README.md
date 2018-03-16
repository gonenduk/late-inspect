# late-inspect 

Start the debugger listener on an already running Node.js process.

## Installation

```sh
$ npm install -g late-inspect
```

## Usage

```bash
$ lateinspect [process id]
```

Will signal a running Node.js process with that id to start the debugger listener.
Same effect as running with the --inspect flag without the need to restart the process.

Works on Windows, Mac and Unix systems.  

## License

[ISC](LICENSE)
