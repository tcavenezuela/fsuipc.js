import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const ADF2: OffsetList = {
  adf2Freq: new Offset({
    value: 0x2d4,
    name: 'adf2Freq',
    category: OffsetCategory.RADIOS,
    description: 'ADF 2 freq - Main 3 digits in BCD - FS2004',
    type: Type.UInt16,
    convert: '+({VAL}).toString(16)',
    permission: 'rw'
  }),
  adf2ExtendedFreq: new Offset({
    value: 0x2d6,
    name: 'adf2ExtendedFreq',
    category: OffsetCategory.RADIOS,
    description: 'ADF 2 extended freq - in BCD - FS2004',
    type: Type.UInt16,
    permission: 'rw'
  }),
  adf2RelBearing: new Offset({
    value: 0x2d8,
    name: 'adf2RelBearing',
    category: OffsetCategory.RADIOS,
    description: 'ADF2 Rel Bearing - FS2004',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.Int16,
    permission: 'r'
  }),
  ndb2Identity: new Offset({
    value: 0x2dc,
    name: 'ndb2Identity',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 identity - FS2004',
    type: Type.String,
    length: 6,
    permission: 'r'
  }),
  ndb2Name: new Offset({
    value: 0x2e2,
    name: 'ndb2Name',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 name - FS2004',
    type: Type.String,
    length: 25,
    permission: 'r'
  }),
  ndb2IdentSoundSwitch: new Offset({
    value: 0x2fb,
    name: 'ndb2IdentSoundSwitch',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 ident sound switch - FS2004',
    type: Type.Byte,
    convert: '!!{VAL}',
    permission: 'rw'
  }),
  adf2SignalStrength: new Offset({
    value: 0xc14,
    name: 'adf2SignalStrength',
    category: OffsetCategory.RADIOS,
    description: 'ADF2 signal strength',
    type: Type.UInt32,
    permission: 'r'
  }),
  adf2Latitude: new Offset({
    value: 0x1130,
    name: 'adf2Latitude',
    category: OffsetCategory.RADIOS,
    description: 'adf2 latitude',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r'
  }),
  adf2Longitude: new Offset({
    value: 0x1134,
    name: 'adf2Longitude',
    category: OffsetCategory.RADIOS,
    description: 'adf2 longitude',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r'
  }),
  adf2Altitude: new Offset({
    value: 0x1138,
    name: 'adf2Altitude',
    category: OffsetCategory.RADIOS,
    description: 'adf2 altitude - ft',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  })
};
