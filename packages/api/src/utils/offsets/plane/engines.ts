import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

import { engine1 } from './engines/engine1';
import { engine2 } from './engines/engine2';
import { engine3 } from './engines/engine3';
import { engine4 } from './engines/engine4';
import { propeller1 } from './engines/propeller1';

export const engines: OffsetList = {
  engineType: new Offset({
    value: 0x609,
    name: 'engineType',
    category: OffsetCategory.ENGINE,
    description: 'engine type',
    convert: 'engineType',
    mapping: true,
    type: Type.Byte,
    permission: 'r'
  }),
  hasMixtureControl: new Offset({
    value: 0x780,
    name: 'hasMixtureControl',
    category: OffsetCategory.ENGINE,
    description: 'has mixture control',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  hasCarbHeat: new Offset({
    value: 0x784,
    name: 'hasCarbHeat',
    category: OffsetCategory.ENGINE,
    description: 'has carb heat',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  activeEngine: new Offset({
    value: 0x888,
    name: 'activeEngine',
    category: OffsetCategory.ENGINE,
    description: 'active engine pattern',
    type: Type.BitArray,
    length: 1,
    permission: 'rw'
  }),
  enginesCount: new Offset({
    value: 0xaec,
    name: 'enginesCount',
    category: OffsetCategory.ENGINE,
    description: 'engines count',
    type: Type.Int16,
    permission: 'r'
  }),
  throttleLowerLimit: new Offset({
    value: 0xb00,
    name: 'throttleLowerLimit',
    category: OffsetCategory.ENGINE,
    description: 'throttle lower limit - percent - negative = reverse capable',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'r'
  }),
  ...engine1,
  ...engine2,
  ...engine3,
  ...engine4,
  ...propeller1
};
