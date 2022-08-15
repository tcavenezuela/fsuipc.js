import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const ADF1: OffsetList = {
  adfFreq: new Offset({
    value: 0x34c,
    name: 'adfFreq',
    category: OffsetCategory.RADIOS,
    description:
      'ADF frequency show as Binary Coded Decimal. The thousands digit and the fractional parts are provided in adfFreqExtended',
    type: Type.UInt16,
    convert: '+({VAL}).toString(16)',
    permission: 'rw'
  }),
  adfFreqExtended: new Offset({
    value: 0x356,
    name: 'adfFreqExtended',
    category: OffsetCategory.RADIOS,
    description: 'ADF frequency extended',
    type: Type.UInt16,
    permission: 'rw'
  }),
  adf1SignalStrength: new Offset({
    value: 0xc1c,
    name: 'adf1SignalStrength',
    category: OffsetCategory.RADIOS,
    description: 'ADF1 signal strength',
    type: Type.UInt32,
    permission: 'r'
  }),
  adf1BearingToNDB: new Offset({
    value: 0xc6a,
    name: 'adf1BearingToNDB',
    category: OffsetCategory.RADIOS,
    description: 'ADF1 relative bearing to NDB - degrees - -ve left, +ve right',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.Int16,
    permission: 'r'
  }),
  adf1DialBearing: new Offset({
    value: 0xc6c,
    name: 'adf1DialBearing',
    category: OffsetCategory.RADIOS,
    description: 'ADF1 dial bearing - degrees',
    type: Type.UInt16,
    permission: 'rw'
  }),
  adf1Latitude: new Offset({
    value: 0x1124,
    name: 'adf1Latitude',
    category: OffsetCategory.RADIOS,
    description: 'adf1 latitude',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r'
  }),
  adf1Longitude: new Offset({
    value: 0x1128,
    name: 'adf1Longitude',
    category: OffsetCategory.RADIOS,
    description: 'adf1 longitude',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r'
  }),
  adf1Altitude: new Offset({
    value: 0x112c,
    name: 'adf1Altitude',
    category: OffsetCategory.RADIOS,
    description: 'adf1 altitude - ft',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  })
};
