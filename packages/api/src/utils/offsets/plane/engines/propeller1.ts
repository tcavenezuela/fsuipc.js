import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const propeller1: OffsetList = {
  propeller1RPM: new Offset({
    value: 0x2400,
    name: 'propeller1RPM',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 RPM',
    type: Type.Double,
    permission: 'r'
  }),
  propeller1RPMPercent: new Offset({
    value: 0x2408,
    name: 'propeller1RPMPercent',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 RPM percent',
    convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
    type: Type.Double,
    permission: 'r'
  }),
  propeller1Thrust: new Offset({
    value: 0x2410,
    name: 'propeller1Thrust',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 thrust - lb',
    convert: '+({VAL}).toFixed(2)',
    type: Type.Double,
    permission: 'r'
  }),
  propeller1BetaBladeAngle: new Offset({
    value: 0x2418,
    name: 'propeller1BetaBladeAngle',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 beta blade angle - rad',
    convert: '+({VAL}).toFixed(4)',
    type: Type.Double,
    permission: 'r'
  }),
  propeller1FeatheringInhibit: new Offset({
    value: 0x2420,
    name: 'propeller1FeatheringInhibit',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 feathering inhibit',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller1Feathered: new Offset({
    value: 0x2424,
    name: 'propeller1Feathered',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 feathered',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  propeller1SyncDeltaLever: new Offset({
    value: 0x2428,
    name: 'propeller1SyncDeltaLever',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 sync delta lever',
    type: Type.Double,
    permission: 'r'
  }),
  propeller1AutofeatherArmed: new Offset({
    value: 0x2430,
    name: 'propeller1AutofeatherArmed',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 autofeather armed flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller1FeatherSwitch: new Offset({
    value: 0x2434,
    name: 'propeller1FeatherSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 feather switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller1PanelAutofeatherSwitch: new Offset({
    value: 0x2438,
    name: 'propeller1PanelAutofeatherSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 panel autofeather switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller1Sync: new Offset({
    value: 0x243c,
    name: 'propeller1Sync',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 sync active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller1DeiceSwitch: new Offset({
    value: 0x2440,
    name: 'propeller1DeiceSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 1 de-ice active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
