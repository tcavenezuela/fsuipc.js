import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const propeller3: OffsetList = {
  propeller3RPM: new Offset({
    value: 0x2600,
    name: 'propeller3RPM',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 RPM',
    type: Type.Double,
    permission: 'r'
  }),
  propeller3RPMPercent: new Offset({
    value: 0x2608,
    name: 'propeller3RPMPercent',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 RPM percent',
    convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
    type: Type.Double,
    permission: 'r'
  }),
  propeller3Thrust: new Offset({
    value: 0x2610,
    name: 'propeller3Thrust',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 thrust - lb',
    convert: '+({VAL}).toFixed(2)',
    type: Type.Double,
    permission: 'r'
  }),
  propeller3BetaBladeAngle: new Offset({
    value: 0x2618,
    name: 'propeller3BetaBladeAngle',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 beta blade angle - rad',
    convert: '+({VAL}).toFixed(4)',
    type: Type.Double,
    permission: 'r'
  }),
  propeller3FeatheringInhibit: new Offset({
    value: 0x2620,
    name: 'propeller3FeatheringInhibit',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 feathering inhibit',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller3Feathered: new Offset({
    value: 0x2624,
    name: 'propeller3Feathered',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 feathered',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  propeller3SyncDeltaLever: new Offset({
    value: 0x2628,
    name: 'propeller3SyncDeltaLever',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 sync delta lever',
    type: Type.Double,
    permission: 'r'
  }),
  propeller3AutofeatherArmed: new Offset({
    value: 0x2630,
    name: 'propeller3AutofeatherArmed',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 autofeather armed flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller3FeatherSwitch: new Offset({
    value: 0x2634,
    name: 'propeller3FeatherSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 feather switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller3PanelAutofeatherSwitch: new Offset({
    value: 0x2638,
    name: 'propeller3PanelAutofeatherSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 panel autofeather switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller3Sync: new Offset({
    value: 0x263c,
    name: 'propeller3Sync',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 sync active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  propeller3DeiceSwitch: new Offset({
    value: 0x2640,
    name: 'propeller3DeiceSwitch',
    category: OffsetCategory.ENGINE,
    description: 'propeller 3 de-ice active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
