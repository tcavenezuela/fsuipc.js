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
    permission: 'rw',
  }),
  leftAileronDeflection: new Offset({
    value: 0x3B0,
    name: 'leftAileronDeflection',
    category: OffsetCategory.CONTROLS,
    description: 'left aileron deflection - radians',
    type: Type.Double,
    permission: 'r',
  }),
  rightAileronDeflection: new Offset({
    value: 0x3B8,
    name: 'rightAileronDeflection',
    category: OffsetCategory.CONTROLS,
    description: 'right aileron deflection - radians',
    type: Type.Double,
    permission: 'r',
  }),
  rotorClutchSwitch: new Offset({
    value: 0x889,
    name: 'rotorClutchSwitch',
    category: OffsetCategory.CONTROLS,
    description: 'rotor clutch switch',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw',
  }),
  propellerPitchControl: new Offset({
    value: 0xAF0,
    name: 'propellerPitchControl',
    category: OffsetCategory.CONTROLS,
    description: '0=fixed, 1=auto, 2=manual',
    type: Type.UInt16,
    permission: 'rw',
  }),
  elevatorPositionControl: new Offset({
    value: 0xBB2,
    name: 'elevatorPositionControl',
    description: 'elevator position control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw',
  }),
  elevatorIndicator: new Offset({
    value: 0xBB4,
    name: 'elevatorIndicator',
    description: 'elevator indicator',
    category: OffsetCategory.CONTROLS,
    type: Type.Int16,
    permission: 'r',
  }),
  aileronPositionControl: new Offset({
    value: 0xBB6,
    name: 'aileronPositionControl',
    description: 'aileron position control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw',
  }),
  aileronIndicator: new Offset({
    value: 0xBB8,
    name: 'aileronIndicator',
    description: 'aileron indicator',
    category: OffsetCategory.CONTROLS,
    type: Type.Int16,
    permission: 'r',
  }),
  rudderPositionControl: new Offset({
    value: 0xBBA,
    name: 'rudderPositionControl',
    description: 'rudder position control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw',
  }),
  rudderIndicator: new Offset({
    value: 0xBBC,
    name: 'rudderIndicator',
    description: 'rudder indicator',
    category: OffsetCategory.CONTROLS,
    type: Type.Int16,
    permission: 'r',
  }),
  elevatorTrimPositionControl: new Offset({
    value: 0xBC0,
    name: 'elevatorTrimPositionControl',
    description: 'elevator trim position control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw',
  }),
  elevatorTrimIndicator: new Offset({
    value: 0xBC2,
    name: 'elevatorTrimIndicator',
    description: 'elevator trim indicator',
    category: OffsetCategory.CONTROLS,
    type: Type.Int16,
    permission: 'r',
  }),
  leftBrakeApplication: new Offset({
    value: 0xBC4,
    name: 'leftBrakeApplication',
    description: 'left brake application pressure - percent - will match 100% if parking brake on',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'r',
  }),
  rightBrakeApplication: new Offset({
    value: 0xBC6,
    name: 'rightBrakeApplication',
    description: 'right brake application pressure - percent - will match 100% if parking brake on',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'r',
  }),
  parkingBrake: new Offset({
    value: 0xBC8,
    name: 'parkingBrake',
    description: 'parking brake active',
    category: OffsetCategory.CONTROLS,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 32767 : 0 : {VAL} >= 32767',
    type: Type.Int16,
    permission: 'r',
  }),
  brakingIndicator: new Offset({
    value: 0xBCA,
    name: 'brakingIndicator',
    description: 'braking indicator',
    category: OffsetCategory.CONTROLS,
    convert: 'appliedBrakes',
    mapping: true,
    type: Type.Int16,
    permission: 'r',
  }),
  spoilersArm: new Offset({
    value: 0xBCC,
    name: 'spoilersArm',
    description: 'spoilers arm indicator',
    category: OffsetCategory.CONTROLS,
    convert: '!!{VAL}',
    type: Type.Int32,
    permission: 'rw',
  }),
  spoilersControl: new Offset({
    value: 0xBD0,
    name: 'spoilersControl',
    description: 'spoilers control - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'spoilersControl',
    mapping: true,
    type: Type.Int32,
    permission: 'rw',
  }),
  spoilerLeftPosition: new Offset({
    value: 0xBD4,
    name: 'spoilerLeftPosition',
    description: 'left spoiler position - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'rw',
  }),
  spoilerRightPosition: new Offset({
    value: 0xBD8,
    name: 'spoilerRightPosition',
    description: 'right spoiler position - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'rw',
  }),
  flapsControl: new Offset({
    value: 0xBDC,
    name: 'flapsControl',
    description: 'flaps deployment - percent - for steps, depends on 0x3BFA',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'rw',
  }),
  flapsLeftPosition: new Offset({
    value: 0xBE0,
    name: 'flapsLeftPosition',
    description: 'left flaps position indicator - percent - to get angle, depends on max',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r',
  }),
  flapsRightPosition: new Offset({
    value: 0xBE0,
    name: 'flapsRightPosition',
    description: 'right flaps position indicator - percent - to get angle, depends on max',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r',
  }),
  gearControl: new Offset({
    value: 0xBE8,
    name: 'gearControl',
    description: 'gear deploy - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'rw',
  }),
  gearNosePosition: new Offset({
    value: 0xBEC,
    name: 'gearNosePosition',
    description: 'nose gear deploy - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r',
  }),
  gearRightPosition: new Offset({
    value: 0xBF0,
    name: 'gearRightPosition',
    description: 'nose gear deploy - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r',
  }),
  gearLeftPosition: new Offset({
    value: 0xBF4,
    name: 'gearLeftPosition',
    description: 'nose gear deploy - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int32,
    permission: 'r',
  }),
  flapsHandleIndex: new Offset({
    value: 0xBFC,
    name: 'flapsHandleIndex',
    description: '0 = full up',
    category: OffsetCategory.CONTROLS,
    type: Type.Byte,
    permission: 'rw',
  }),
  rightToeBrakeControl: new Offset({
    value: 0xC00,
    name: 'rightToeBrakeControl',
    description: 'right toe brake application - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 2)',
    type: Type.Byte,
    permission: 'rw',
  }),
  leftToeBrakeControl: new Offset({
    value: 0xC01,
    name: 'leftToeBrakeControl',
    description: 'left toe brake application - percent',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 2)',
    type: Type.Byte,
    permission: 'rw',
  }),
  aileronTrimPosition: new Offset({
    value: 0xC02,
    name: 'aileronTrimPosition',
    description: 'aileron trim position - percent - can be negative',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw',
  }),
  rudderTrimPosition: new Offset({
    value: 0xC04,
    name: 'rudderTrimPosition',
    description: 'rudder trim position - percent - can be negative',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw',
  }),
  steeringTillerCalibratedValue: new Offset({
    value: 0xC08,
    name: 'steeringTillerCalibratedValue',
    description: 'steering tiller calibrated value - percent - can be negative',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'r',
  }),
  rudderCalibratedvalue: new Offset({
    value: 0xC0A,
    name: 'rudderCalibratedvalue',
    description: 'rudder calibrated value - percent - can be negative',
    category: OffsetCategory.CONTROLS,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'r',
  }),
};
