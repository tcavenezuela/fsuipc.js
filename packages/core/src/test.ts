/* eslint-disable @typescript-eslint/no-var-requires */

const fsuipcModule = require('bindings')('fsuipc.node');

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
