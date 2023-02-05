/* eslint-disable @typescript-eslint/no-var-requires */

if (process.platform !== 'win32') {
  console.warn('Warning: FSUIPC only works on Windows platforms.');
} else {
  const core = require('bindings')('fsuipc.node');

  module.exports = core;
}
