import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const propeller4: OffsetList = {
  propeller4RPM: new Offset({
    value: 0x2700,
    name: 'propeller4RPM',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 RPM',
    type: Type.Double,
    permission: 'r'
  }),
  propeller4RPMPercent: new Offset({
    value: 0x2708,
    name: 'propeller4RPMPercent',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 RPM percent',
    convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
    type: Type.Double,
    permission: 'r'
  }),
  propeller4Thrust: new Offset({
    value: 0x2710,
    name: 'propeller4Thrust',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 thrust - lb',
    convert: '+({VAL}).toFixed(2)',
    type: Type.Double,
    permission: 'r'
  }),
  propeller4BetaBladeAngle: new Offset({
    value: 0x2718,
    name: 'propeller4BetaBladeAngle',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 beta blade angle - rad',
    convert: '+({VAL}).toFixed(4)',
    type: Type.Double,
    permission: 'r'
  }),
  propeller4FeatheringInhibit: new Offset({
    value: 0x2720,
    name: 'propeller4FeatheringInhibit',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 feathering inhibit',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller4Feathered: new Offset({
    value: 0x2724,
    name: 'propeller4Feathered',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 feathered',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  propeller4SyncDeltaLever: new Offset({
    value: 0x2728,
    name: 'propeller4SyncDeltaLever',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 sync delta lever',
    type: Type.Double,
    permission: 'r'
  }),
  propeller4AutofeatherArmed: new Offset({
    value: 0x2730,
    name: 'propeller4AutofeatherArmed',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 autofeather armed flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller4FeatherSwitch: new Offset({
    value: 0x2734,
    name: 'propeller4FeatherSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 feather switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller4PanelAutofeatherSwitch: new Offset({
    value: 0x2738,
    name: 'propeller4PanelAutofeatherSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 panel autofeather switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller4Sync: new Offset({
    value: 0x273c,
    name: 'propeller4Sync',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 sync active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller4DeiceSwitch: new Offset({
    value: 0x2740,
    name: 'propeller4DeiceSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 4 de-ice active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
