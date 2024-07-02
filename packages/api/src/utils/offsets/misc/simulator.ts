import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const simulator: OffsetList = {
  fsVersion: new Offset({
    value: 0x3308,
    name: 'fsVersion',
    category: OffsetCategory.MISC,
    description: 'sim version currently in use',
    type: Type.UInt16,
    permission: 'r'
  }),
  aircraftTitle: new Offset({
    value: 0x3d00,
    name: 'aircraftTitle',
    category: OffsetCategory.MISC,
    description: 'aircraft name currently in use',
    type: Type.String,
    length: 256,
    permission: 'r'
  }),
  /* XPUIPC offsets */
  xplaneFlag: new Offset({
    value: 0x6fff,
    name: 'xplaneFlag',
    category: OffsetCategory.MISC,
    description: 'flag to indicate if the fsuipc version is currently running in X-Plane (XPUIPC)',
    type: Type.Byte,
    permission: 'r'
  }),
  xpuipcVersion: new Offset({
    value: 0x6f03,
    name: 'xpuipcVersion',
    category: OffsetCategory.MISC,
    description: 'XPUIPC version string',
    type: Type.String,
    length: 256,
    permission: 'r'
  })
};
