<img src="https://user-images.githubusercontent.com/8359234/184555256-5e6458a4-6e4c-489b-b1a6-bfe2e6dcd15a.png" alt="fsuipc.js" width="150"/> 

[![npm version](https://badge.fury.io/js/fsuipc.js.svg)](https://badge.fury.io/js/fsuipc.js)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![release](https://github.com/tcavenezuela/fsuipc.js/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/tcavenezuela/fsuipc.js/actions/workflows/release.yml)

[FSUIPC](http://www.fsuipc.com/) client implementation for NodeJS.

## Packages

- ✈️ `fsuipc.js` - Core package that allows you to use the single-minimal version of fsuipc.js.
- [🚀 `@fsuipc.js/api`](https://github.com/tcavenezuela/fsuipc.js/tree/master/packages/api) - An API wrapper with +800 predefined offsets.

## Prerequisites

to execute fsuipc.js correctly you must meet the following requirements:

- Windows 10 64bits
- Node 16.14.2+
- [FSUIPC](http://www.fsuipc.com/) installed as flight simulator plugin
- Install necessary development tools (Python, Visual Studio) [here](https://github.com/nodejs/node-gyp?tab=readme-ov-file#on-windows)

## Quick start

### Installation

```bash
yarn install fsuipc.js
```

```js
const fsuipcModule = require('fsuipc.js');

const simulator = new fsuipcModule.FSUIPC();

simulator
  .open()
  .then((request) => {
    /* Offset name, value in hexadecimal and data type. */
    request.add('clockHour', 0x238, fsuipcModule.Type.Byte);

    return request.process();
  })
  .then((result) => {
    console.log(JSON.stringify(result));

    return simulator.close();
  })
  .catch((err) => {
    console.error(err);

    return simulator.close();
  });
```

## Motivation

I found on the internet several libraries made by simmers and i found that there are several very good libraries but everything was scattered between different repositories. With this package I wanted to mix the best of the community with a monorepo, so we can continue contribute to a single repository and have the best possible library 🥳.

**fsuipc.js** is based on the following repositories:

- [fsuipc-node](https://github.com/koesie10/fsuipc-node) by [Koen Vlaswinkel](https://github.com/koesie10)
- [fsuipc-api](https://github.com/fsuipc-node/api) by [blackholegalaxy](https://github.com/blackholegalaxy)

_Special thanks_ ✨ to these repositories and their creators, without them fsuipc.js would not be possible. 🚀🥳

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you want contribute, follow contribution guidelines here: [Contribution Guideline](https://github.com/tcavenezuela/fsuipc.js/blob/master/.github/CONTRIBUTING.md).

## License

Distributed under the MIT License. See [LICENSE](https://github.com/tcavenezuela/fsuipc.js/blob/master/LICENSE) for more information.
