import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const positionAttitude: OffsetList = {
  groundElevation: new Offset({
    value: 0x20,
    name: 'groundElevation',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'ground elevation - feet',
    convert: 'Math.round({VAL} * 3.28084 / 256)',
    type: Type.Int32,
    permission: 'r'
  }),
  magVar: new Offset({
    value: 0x2a0,
    name: 'magVar',
    category: OffsetCategory.POSITION_ATTITUDE,
    description:
      '-ve is west, +ve east. mag to true by adding this, true to mag by substracting this',
    type: Type.Int16,
    convert: '+({VAL}*360/65536).toFixed(2)',
    permission: 'r'
  }),
  gs: new Offset({
    value: 0x2b4,
    name: 'gs',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'ground speed in kt',
    type: Type.Int32,
    convert: 'Math.floor({VAL} * 3600 / 65536 / 1852)',
    permission: 'r'
  }),
  tas: new Offset({
    value: 0x2b8,
    name: 'tas',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'true air speed - knots',
    type: Type.Int32,
    convert: 'Math.floor({VAL} / 128)',
    permission: 'r'
  }),
  ias: new Offset({
    value: 0x2bc,
    name: 'ias',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'indicated air speed - knots',
    type: Type.Int32,
    convert: 'Math.floor({VAL} / 128)',
    permission: 'r'
  }),
  bpa: new Offset({
    value: 0x2c4,
    name: 'bpa',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'barper pole airspeed - knots',
    type: Type.UInt32,
    convert: 'Math.floor({VAL} / 128)',
    permission: 'r'
  }),
  vs: new Offset({
    value: 0x2c8,
    name: 'vs',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'vertical speed - ft/min',
    type: Type.Int32,
    convert: 'Math.floor({VAL} * 60 * 3.28084 / 256)',
    permission: 'r'
  }),
  whiskeyCompass: new Offset({
    value: 0x2cc,
    name: 'whiskeyCompass',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'whiskey compass - degrees',
    type: Type.Double,
    permission: 'r'
  }),
  vsAtTouchdown: new Offset({
    value: 0x30c,
    name: 'vsAtTouchdown',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'vertical speed - m/s',
    type: Type.Int32,
    convert: 'Math.floor({VAL}*60*3.28084/256)',
    permission: 'r'
  }),
  planeOnground: new Offset({
    value: 0x366,
    name: 'planeOnground',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'plane on the ground',
    type: Type.UInt16,
    convert: '!!{VAL}',
    permission: 'r'
  }),
  latitude: new Offset({
    value: 0x560,
    name: 'latitude',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'latitude - -ve for south +ve for north',
    type: Type.Int64,
    convert: '{VAL} * 90 / (10001750 * 65536 * 65536)',
    permission: 'rw'
  }),
  longitude: new Offset({
    value: 0x568,
    name: 'longitude',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'longitude - -ve for west +ve for east',
    type: Type.Int64,
    convert: '{VAL} * 360 / (65536 * 65536 * 65536 * 65536)',
    permission: 'rw'
  }),
  altitude: new Offset({
    value: 0x570,
    name: 'altitude',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'altitude - AMSL',
    type: Type.Int64,
    convert: '+({VAL} * 3.28084 / (65536 * 65536)).toFixed(2)',
    permission: 'rw'
  }),
  altitudeAgl: new Offset({
    value: 0x31e4,
    name: 'altitudeAgl',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'altitude - radio',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084 / 65536).toFixed(2)',
    permission: 'rw'
  }),
  altitudeCalibrated: new Offset({
    value: 0x3324,
    name: 'altitudeCalibrated',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'altitude - calibrated - ft - from altimeter',
    type: Type.Int32,
    convert: '+({VAL}).toFixed(2)',
    permission: 'r'
  }),
  pitch: new Offset({
    value: 0x578,
    name: 'pitch',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'pitch - 0 for level, -ve for pitch up, +ve for pitch down',
    type: Type.Int32,
    convert: '+({VAL} * 360 / (65536 * 65536)).toFixed(2)',
    permission: 'rw'
  }),
  bank: new Offset({
    value: 0x57c,
    name: 'bank',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'bank - -ve right bank, +ve left bank',
    type: Type.Int32,
    convert: '+({VAL} * 360 / (65536 * 65536)).toFixed(2)',
    permission: 'rw'
  }),
  heading: new Offset({
    value: 0x580,
    name: 'heading',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'heading - TRUE',
    type: Type.UInt32,
    convert: '+({VAL} * 360 / (65536 * 65536)).toFixed(2)',
    permission: 'rw'
  }),
  viewpointLatitude: new Offset({
    value: 0x5b0,
    name: 'viewpointLatitude',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'viewpoint latitude - -ve for south +ve for north',
    type: Type.Int64,
    convert: '{VAL} * 90 / (10001750 * 65536 * 65536)',
    permission: 'r'
  }),
  viewpointLongitude: new Offset({
    value: 0x5b8,
    name: 'viewpointLongitude',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'viewpoint longitude - -ve for west +ve for east',
    type: Type.Int64,
    convert: '{VAL} * 360 / (65536 * 65536 * 65536 * 65536)',
    permission: 'r'
  }),
  viewpointAltitude: new Offset({
    value: 0x5c0,
    name: 'viewpointAltitude',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'viewpoint altitude - AGL',
    type: Type.Int64,
    convert: '+({VAL} * 3.28084 / (65536 * 65536)).toFixed(2)',
    permission: 'r'
  }),
  viewpointPitch: new Offset({
    value: 0x5c8,
    name: 'viewpointPitch',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'pitch - 0 for level, - for pitch up,  for pitch down',
    type: Type.Int32,
    convert: '+({VAL} * 360 / (65536 * 65536)).toFixed(2)',
    permission: 'r'
  }),
  viewpointBank: new Offset({
    value: 0x5cc,
    name: 'viewpointBank',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'viewpoint bank - - right bank, + left bank',
    type: Type.Int32,
    convert: '+({VAL} * 360 / (65536 * 65536)).toFixed(2)',
    permission: 'r'
  }),
  viewpointHeading: new Offset({
    value: 0x5d0,
    name: 'viewpointHeading',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'viewpoint heading - TRUE',
    type: Type.UInt32,
    convert: '+({VAL} * 360 / (65536 * 65536)).toFixed(2)',
    permission: 'r'
  }),
  verticalSpeed: new Offset({
    value: 0x842,
    name: 'verticalSpeed',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'vertical speed - more precise - ft/min - +ve = up',
    type: Type.Int16,
    convert: '+({VAL} * -3.28084).toFixed(2)',
    permission: 'r'
  }),
  gForce: new Offset({
    value: 0x1140,
    name: 'gForce',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'g-force',
    type: Type.Double,
    permission: 'r'
  }),
  gForceTouchDown: new Offset({
    value: 0x11b8,
    name: 'gForceTouchDown',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'g-force touchdown - unknown unit',
    convert: '{VAL} / 625',
    type: Type.Int16,
    permission: 'r'
  }),
  gForceAlt: new Offset({
    value: 0x11ba,
    name: 'gForceAlt',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'g-force alt unit',
    convert: '{VAL} / 625',
    type: Type.Int16,
    permission: 'r'
  }),
  angleOfAttack: new Offset({
    value: 0x11be,
    name: 'angleOfAttack',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'angle of attack - percent of max',
    convert: '+(100 - (100 * {VAL} / 32767)).toFixed(2)',
    type: Type.Int16,
    permission: 'r'
  }),
  machSpeed: new Offset({
    value: 0x11c6,
    name: 'machSpeed',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'mach speed',
    convert: '{VAL} / 20480',
    type: Type.UInt16,
    permission: 'r'
  }),
  landingRate: new Offset({
    value: 0x030c,
    name: 'landingRate',
    category: OffsetCategory.POSITION_ATTITUDE,
    description: 'landing rate - ft/min',
    convert: '{VAL} * 60 * 3.28084 / 256',
    type: Type.Int16,
    permission: 'r'
  })
};
