import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const propeller2: OffsetList = {
  propeller2RPM: new Offset({
    value: 0x2500,
    name: 'propeller2RPM',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 RPM',
    type: Type.Double,
    permission: 'r'
  }),
  propeller2RPMPercent: new Offset({
    value: 0x2508,
    name: 'propeller2RPMPercent',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 RPM percent',
    convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
    type: Type.Double,
    permission: 'r'
  }),
  propeller2Thrust: new Offset({
    value: 0x2510,
    name: 'propeller2Thrust',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 thrust - lb',
    convert: '+({VAL}).toFixed(2)',
    type: Type.Double,
    permission: 'r'
  }),
  propeller2BetaBladeAngle: new Offset({
    value: 0x2518,
    name: 'propeller2BetaBladeAngle',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 beta blade angle - rad',
    convert: '+({VAL}).toFixed(4)',
    type: Type.Double,
    permission: 'r'
  }),
  propeller2FeatheringInhibit: new Offset({
    value: 0x2520,
    name: 'propeller2FeatheringInhibit',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 feathering inhibit',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller2Feathered: new Offset({
    value: 0x2524,
    name: 'propeller2Feathered',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 feathered',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  propeller2SyncDeltaLever: new Offset({
    value: 0x2528,
    name: 'propeller2SyncDeltaLever',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 sync delta lever',
    type: Type.Double,
    permission: 'r'
  }),
  propeller2AutofeatherArmed: new Offset({
    value: 0x2530,
    name: 'propeller2AutofeatherArmed',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 autofeather armed flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller2FeatherSwitch: new Offset({
    value: 0x2534,
    name: 'propeller2FeatherSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 feather switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller2PanelAutofeatherSwitch: new Offset({
    value: 0x2538,
    name: 'propeller2PanelAutofeatherSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 panel autofeather switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller2Sync: new Offset({
    value: 0x253c,
    name: 'propeller2Sync',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 sync active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller2DeiceSwitch: new Offset({
    value: 0x2540,
    name: 'propeller2DeiceSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 2 de-ice active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
