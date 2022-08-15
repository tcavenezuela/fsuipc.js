import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const controls: OffsetList = {
  autoRudder: new Offset({
    value: 0x278,
    name: 'autoRudder',
    category: OffsetCategory.CONTROLS,
    description: 'auto coordination',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'rw'
  }),
  leftAileronDeflection: new Offset({
    value: 0x3b0,
    name: 'leftAileronDeflection',
    category: OffsetCategory.CONTROLS,
    description: 'left aileron deflection - radians',
    type: Type.Double,
    permission: 'r'
  }),
  rightAileronDeflection: new Offset({
    value: 0x3b8,
    name: 'rightAileronDeflection',
    category: OffsetCategory.CONTROLS,
    description: 'right aileron deflection - radians',
    type: Type.Double,
    permission: 'r'
  }),
  rotorClutchSwitch: new Offset({
    value: 0x889,
    name: 'rotorClutchSwitch',
    category: OffsetCategory.CONTROLS,
    description: 'rotor clutch switch',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  propellerPitchControl: new Offset({
    value: 0xaf0,
    name: 'propellerPitchControl',
    category: OffsetCategory.CONTROLS,
    description: '0=fixed, 1=auto, 2=manual',
    type: Type.UInt16,
    permission: 'rw'
  }),
  elevatorPositionControl: new Offset({
    value: 0xbb2,
    name: 'elevatorPositionControl',
    description: 'elevator position control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  elevatorIndicator: new Offset({
    value: 0xbb4,
    name: 'elevatorIndicator',
    description: 'elevator indicator',
    category: OffsetCategory.CONTROLS,
    type: Type.Int16,
    permission: 'r'
  }),
  aileronPositionControl: new Offset({
    value: 0xbb6,
    name: 'aileronPositionControl',
    description: 'aileron position control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  aileronIndicator: new Offset({
    value: 0xbb8,
    name: 'aileronIndicator',
    description: 'aileron indicator',
    category: OffsetCategory.CONTROLS,
    type: Type.Int16,
    permission: 'r'
  }),
  rudderPositionControl: new Offset({
    value: 0xbba,
    name: 'rudderPositionControl',
    description: 'rudder position control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  rudderIndicator: new Offset({
    value: 0xbbc,
    name: 'rudderIndicator',
    description: 'rudder indicator',
    category: OffsetCategory.CONTROLS,
    type: Type.Int16,
    permission: 'r'
  }),
  elevatorTrimPositionControl: new Offset({
    value: 0xbc0,
    name: 'elevatorTrimPositionControl',
    description: 'elevator trim position control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  elevatorTrimIndicator: new Offset({
    value: 0xbc2,
    name: 'elevatorTrimIndicator',
    description: 'elevator trim indicator',
    category: OffsetCategory.CONTROLS,
    type: Type.Int16,
    permission: 'r'
  }),
  leftBrakeApplication: new Offset({
    value: 0xbc4,
    name: 'leftBrakeApplication',
    description: 'left brake application pressure - percent - will match 100% if parking brake on',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'r'
  }),
  rightBrakeApplication: new Offset({
    value: 0xbc6,
    name: 'rightBrakeApplication',
    description: 'right brake application pressure - percent - will match 100% if parking brake on',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'r'
  }),
  parkingBrake: new Offset({
    value: 0xbc8,
    name: 'parkingBrake',
    description: 'parking brake active',
    category: OffsetCategory.CONTROLS,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 32767 : 0 : {VAL} >= 32767',
    type: Type.Int16,
    permission: 'r'
  }),
  brakingIndicator: new Offset({
    value: 0xbca,
    name: 'brakingIndicator',
    description: 'braking indicator',
    category: OffsetCategory.CONTROLS,
    convert: 'appliedBrakes',
    mapping: true,
    type: Type.Int16,
    permission: 'r'
  }),
  spoilersArm: new Offset({
    value: 0xbcc,
    name: 'spoilersArm',
    description: 'spoilers arm indicator',
    category: OffsetCategory.CONTROLS,
    convert: '!!{VAL}',
    type: Type.Int32,
    permission: 'rw'
  }),
  spoilersControl: new Offset({
    value: 0xbd0,
    name: 'spoilersControl',
    description: 'spoilers control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'spoilersControl',
    mapping: true,
    type: Type.Int32,
    permission: 'rw'
  }),
  spoilerLeftPosition: new Offset({
    value: 0xbd4,
    name: 'spoilerLeftPosition',
    description: 'left spoiler position - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  spoilerRightPosition: new Offset({
    value: 0xbd8,
    name: 'spoilerRightPosition',
    description: 'right spoiler position - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  flapsControl: new Offset({
    value: 0xbdc,
    name: 'flapsControl',
    description: 'flaps deployment - percent - for steps, depends on 0x3BFA',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  flapsLeftPosition: new Offset({
    value: 0xbe0,
    name: 'flapsLeftPosition',
    description: 'left flaps position indicator - percent - to get angle, depends on max',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  flapsRightPosition: new Offset({
    value: 0xbe0,
    name: 'flapsRightPosition',
    description: 'right flaps position indicator - percent - to get angle, depends on max',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  gearControl: new Offset({
    value: 0xbe8,
    name: 'gearControl',
    description: 'gear deploy - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  gearNosePosition: new Offset({
    value: 0xbec,
    name: 'gearNosePosition',
    description: 'nose gear deploy - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  gearRightPosition: new Offset({
    value: 0xbf0,
    name: 'gearRightPosition',
    description: 'nose gear deploy - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  gearLeftPosition: new Offset({
    value: 0xbf4,
    name: 'gearLeftPosition',
    description: 'nose gear deploy - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  flapsHandleIndex: new Offset({
    value: 0xbfc,
    name: 'flapsHandleIndex',
    description: '0 = full up',
    category: OffsetCategory.CONTROLS,
    type: Type.Byte,
    permission: 'rw'
  }),
  rightToeBrakeControl: new Offset({
    value: 0xc00,
    name: 'rightToeBrakeControl',
    description: 'right toe brake application - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 2)',
    type: Type.Byte,
    permission: 'rw'
  }),
  leftToeBrakeControl: new Offset({
    value: 0xc01,
    name: 'leftToeBrakeControl',
    description: 'left toe brake application - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 2)',
    type: Type.Byte,
    permission: 'rw'
  }),
  aileronTrimPosition: new Offset({
    value: 0xc02,
    name: 'aileronTrimPosition',
    description: 'aileron trim position - percent - can be negative',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  rudderTrimPosition: new Offset({
    value: 0xc04,
    name: 'rudderTrimPosition',
    description: 'rudder trim position - percent - can be negative',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  steeringTillerCalibratedValue: new Offset({
    value: 0xc08,
    name: 'steeringTillerCalibratedValue',
    description: 'steering tiller calibrated value - percent - can be negative',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'r'
  }),
  rudderCalibratedvalue: new Offset({
    value: 0xc0a,
    name: 'rudderCalibratedvalue',
    description: 'rudder calibrated value - percent - can be negative',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'r'
  })
};
