# fsuipc.js

This package allows you to use the single-minimal version of fsuipc.js.

- [Read our contribution guidelines](https://github.com/tcavenezuela/fsuipc.js/blob/master/.github/CONTRIBUTING.md).

## Quick start

1. Install `fsuipc.js`:

```bash
yarn add fsuipc.js
```

2. Import the module and create a new object:

```js
const fsuipcModule = require('fsuipc.js');

const simulator = new fsuipcModule.FSUIPC();
```

3: Use the method `open` to request a offset and then, read the value in the promise:

```js
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

## Methods:

### Open:

Opens a connection with a running FSUIPC stream:

```js
simulator.open(requestedSimulator?: Simulator);
```

open method takes 1 optional argument:

- requestedSimulator[Simulator]: simulator identifier in number, you can get the simulator ident or type importing:

```js
import { Simulator } from 'fsuipc.js';

console.log(Simulator.MSFS);
```

_When `requestedSimulator` is not present, the module tries to open a connection with any FSUIPC stream open._

### Close:

Closes a running connection:

```js
simulator.close();
```

### Process:

Process a offset request:

```js
request.add('clockHour', 0x238, fsuipcModule.Type.Byte);

simulator.process();
```

### Add:

Adds a offset request to a FSUIPC stream:

```js
request.add('clockHour', 0x238, fsuipcModule.Type.Byte);
```

Add method takes 3-4 arguments:

- name[string]: offset identifier in string.
- offset[number]: a hexadecimal number that corresponds to a FSUIPC offset.
- type[FixedSizedNumberType | FixedSizedStringType | VariableSizedType]: a type that corresponds to a type of data.
- length[number]: a number that corresponds to data length.

### Write (experimental):

Writes a value into the simulator.

```js
request.write(0x3590, fsuipcModule.Type.Int32, 4, 0); // Closes the engine 1 fuel valve.
```

Writes method takes 3-4 arguments:

- offset[number]: a hexadecimal number that corresponds to a FSUIPC offset.
- type[FixedSizedNumberType | FixedSizedStringType | VariableSizedType]: a type that corresponds to a type of data.
- length[number]: a number that corresponds to data length.
- value[string | ArrayBufferView]: a value that corresponds to the data that we are sending.

### Remove:

Remove a offset that was previously created with `Add` method:

```js
request.remove('clockHour');
```

_You can find a list with FSUIPC offsets [here](https://fsuipc.simflight.com/beta/FSUIPC4_Offsets_Status.pdf), have in mind that this list is out of date and is unofficial._
