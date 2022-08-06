const fsuipcModule = require('bindings')('fsuipc.node');

const sim = new fsuipcModule.FSUIPC();

sim.open()
.then((obj: { add: (name: string, value: number, type: any) => any; process: () => any; }) => {
  console.log(obj.add('clockHour', 0x238, fsuipcModule.Type.Byte));
  return obj.process();
})
.then((result: any) => {
  console.log("result:", JSON.stringify(result));

  return sim.close();
})
.catch((err) => {
  console.error("error:", err);

  return sim.close();
});
