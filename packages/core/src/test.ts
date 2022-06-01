import { FSUIPC, Type } from 'fsuipc.js';

const simulator = new FSUIPC();

simulator.open()
    .then((obj) => {
      console.log(obj.add('clockHour', 0x238, Type.Byte));
      console.log(obj.add('aircraftType', 0x3D00, Type.String, 256));
      console.log(obj.add('lights', 0x0D0C, Type.BitArray, 2));

      return simulator.process();
    })
    .then((result) => {
      console.log(JSON.stringify(result));

      return simulator.close();
    })
    .catch((err) => {
      console.error(err);
      
      return simulator.close();
    });
