# WebAssembly Game Boy Emulator
A Game Boy emulator written in WebAssembly text format.

**This is still under development! For the moment, this doesn't do much at all.**

## Setup
To build, you will need the [WebAssembly Binary Toolkit](https://github.com/WebAssembly/wabt).
To run, the browser must load the binary (.wasm) from a server. There is a basic Express server under */server* 

## Build
To build the .wasm

```bash
cd webassembly-game-boy
/path/to/wabt/bin/./wast2wasm src/gb_cpu.wast -o dist/gb_cpu.wasm
```

To build the webserver

```bash
cd webassembly-game-boy/server
npm install
```

## Run
Start the webserver

```bash
cd webassembly-game-boy/server
node .
```

Open [http://localhost:3000](http://localhost:3000)

## TODO
Everything.