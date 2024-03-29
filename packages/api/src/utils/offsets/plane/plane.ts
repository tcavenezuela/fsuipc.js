import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const plane: OffsetList = {
  vs0: new Offset({
    value: 0x538,
    name: 'vs0',
    category: OffsetCategory.PLANE,
    description: 'Stall speed full flaps - kt',
    convert: 'ftsecToKt',
    mapping: true,
    type: Type.Double,
    permission: 'r'
  }),
  vs1: new Offset({
    value: 0x540,
    name: 'vs1',
    category: OffsetCategory.PLANE,
    description: 'Stall speed clean - kt',
    convert: 'ftsecToKt',
    mapping: true,
    type: Type.Double,
    permission: 'r'
  }),
  vc: new Offset({
    value: 0x548,
    name: 'vc',
    category: OffsetCategory.PLANE,
    description: 'Cruise speed - kt',
    convert: 'ftsecToKt',
    mapping: true,
    type: Type.Double,
    permission: 'r'
  }),
  vmd: new Offset({
    value: 0x550,
    name: 'vmd',
    category: OffsetCategory.PLANE,
    description: 'Minimum drag speed - kt',
    convert: 'ftsecToKt',
    mapping: true,
    type: Type.Double,
    permission: 'r'
  }),
  smokeSystemControl: new Offset({
    value: 0x5d8,
    name: 'smokeSystemControl',
    category: OffsetCategory.PLANE,
    convert: '!!{VAL}',
    description: 'smoke system control on/off',
    type: Type.UInt16,
    permission: 'rw'
  }),
  retractableGear: new Offset({
    value: 0x60c,
    name: 'retractableGear',
    category: OffsetCategory.PLANE,
    description: 'retractable gear (read only)',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  retractableLeftFloatExtension: new Offset({
    value: 0x614,
    name: 'retractableLeftFloatExtension',
    category: OffsetCategory.PLANE,
    description: 'retractable left float extension - percent',
    convert: 'Math.floor({VAL} / 16384 * 100)',
    type: Type.UInt16,
    permission: 'r'
  }),
  retractableRightFloatExtension: new Offset({
    value: 0x616,
    name: 'retractableRightFloatExtension',
    category: OffsetCategory.PLANE,
    description: 'retractable right float extension - percent',
    convert: 'Math.floor({VAL} / 16384 * 100)',
    type: Type.UInt16,
    permission: 'r'
  }),
  hasFlaps: new Offset({
    value: 0x778,
    name: 'hasFlaps',
    category: OffsetCategory.PLANE,
    description: 'has flaps',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  hasStallHorn: new Offset({
    value: 0x77c,
    name: 'hasStallHorn',
    category: OffsetCategory.PLANE,
    description: 'has stall horn',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  hasMixtureEngine: new Offset({
    value: 0x780,
    name: 'hasMixtureEngine',
    category: OffsetCategory.PLANE,
    description: 'has mixture engine',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  hasCarbHeat: new Offset({
    value: 0x784,
    name: 'hasCarbHeat',
    category: OffsetCategory.PLANE,
    description: 'has carburator heater',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  hasSpoilers: new Offset({
    value: 0x78c,
    name: 'hasSpoilers',
    category: OffsetCategory.PLANE,
    description: 'has spoilers',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  isTailDragger: new Offset({
    value: 0x790,
    name: 'isTailDragger',
    category: OffsetCategory.PLANE,
    description: 'has spoilers',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  hasStrobes: new Offset({
    value: 0x794,
    name: 'hasStrobes',
    category: OffsetCategory.PLANE,
    description: 'has strobes',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  hasToeBrakes: new Offset({
    value: 0x79c,
    name: 'hasToeBrakes',
    category: OffsetCategory.PLANE,
    description: 'has toe brakes',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  maxMach: new Offset({
    value: 0xb0c,
    name: 'maxMach',
    category: OffsetCategory.PLANE,
    description: 'mach maximum operating - not FS2004',
    convert: '+({VAL} / 20438).toFixed(2)',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelSelectorsCount: new Offset({
    value: 0x123e,
    name: 'fuelSelectorsCount',
    category: OffsetCategory.PLANE,
    description: 'number of fuel selectors for the aircraft',
    type: Type.Byte,
    permission: 'r'
  }),
  aircraftEmptyWeight: new Offset({
    value: 0x1330,
    name: 'aircraftEmptyWeight',
    category: OffsetCategory.PLANE,
    description: 'aicraft empty weight',
    convert: '+({VAL} / 256).toFixed(2)',
    type: Type.Int32,
    permission: 'r'
  }),
  aircraftMaxGrossWeight: new Offset({
    value: 0x1334,
    name: 'aircraftMaxGrossWeight',
    category: OffsetCategory.PLANE,
    description: 'aicraft max gross weight',
    convert: '+({VAL} / 256).toFixed(2)',
    type: Type.Int32,
    permission: 'r'
  })
};
