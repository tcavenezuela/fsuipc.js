<img src="https://user-images.githubusercontent.com/8359234/184555256-5e6458a4-6e4c-489b-b1a6-bfe2e6dcd15a.png" alt="fsuipc.js" width="150"/> 

[![npm version](https://badge.fury.io/js/@fsuipc.js%2Fapi.svg)](https://badge.fury.io/js/@fsuipc.js%2Fapi)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![release](https://github.com/tcavenezuela/fsuipc.js/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/tcavenezuela/fsuipc.js/actions/workflows/release.yml)

[FSUIPC](http://www.fsuipc.com/) client implementation for NodeJS.

# @fsuipc.js/api

This package allows you to read +800 predefined offsets.

- [Read our contribution guidelines](https://github.com/tcavenezuela/fsuipc.js/blob/master/.github/CONTRIBUTING.md).

## Quick start

1. Install `fsuipc.js` and `@fsuipc.js/api`:

```bash
yarn add fsuipc.js @fsuipc.js/api
```

2. Import the module and create a new object:

```js
import { FsuipcApi } from '@fsuipc.js/api';

const simulator = new FsuipcApi(Simulator.FSX);
```

3: Use the method `init` to request a list of offsets and then, read the value in the promise:

```js
simulator
  .init()
  .then(() => {
    simulator.listen(true, 2000, ['gs', 'altitude', 'comFreq', 'lights']).subscribe((result) => {
      console.log(JSON.stringify(result));
    });
  })
  .catch((e) => console.error(e));
```

## Methods:

### Init:

Returns a promise when you are properly connected to FSUIPC stream. In case your flight simulator isn't running, this will throw an error.

### Listen:

Listen a list of offsets.

listen method takes 2-3 arguments:

- interval[number]: interval at which values will be polled from FSUIPC stream.
- offsetsList[string[]]: a list of string representing offsets you want to subscribe on.
- terminateOnError[boolean]: if set to true, if any value is errored, you will be disconnected from FSUIPC stream.

This method returns a ConvertedOffsetValues observable. You can subscribe to this observable to handle values polled from stream.

### Close:

Closes a running connection.
