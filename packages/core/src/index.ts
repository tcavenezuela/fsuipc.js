if (process.platform !== 'win32') {
  throw new Error('FSUIPC only works on Windows platform');
} else {
  const core = require('bindings')('fsuipc.node');
  
  module.exports = core;
}
