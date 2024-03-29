import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const fuel: OffsetList = {
  fuelWeight: new Offset({
    value: 0xaf4,
    name: 'fuelWeight',
    category: OffsetCategory.FUEL,
    description: 'fuel weight - lbs/gal',
    type: Type.Int16,
    convert: '{VAL} / 256',
    permission: 'r'
  }),
  fuelTankSelector: new Offset({
    value: 0xaf8,
    name: 'fuelTankSelector',
    category: OffsetCategory.FUEL,
    description: 'Engine 1 only',
    convert: 'fuelTank',
    mapping: true,
    type: Type.Int16,
    permission: 'rw'
  }),
  fuelCenterTankLevel: new Offset({
    value: 0xb74,
    name: 'fuelCenterTankLevel',
    category: OffsetCategory.FUEL,
    description: 'center tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelCenterTankCapacity: new Offset({
    value: 0xb78,
    name: 'fuelCenterTankCapacity',
    category: OffsetCategory.FUEL,
    description: 'center tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelLeftMainTankLevel: new Offset({
    value: 0xb7c,
    name: 'fuelLeftMainTankLevel',
    category: OffsetCategory.FUEL,
    description: 'left main tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelLeftMainTankCapacity: new Offset({
    value: 0xb80,
    name: 'fuelLeftMainTankCapacity',
    category: OffsetCategory.FUEL,
    description: 'left main tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelLeftAuxTankLevel: new Offset({
    value: 0xb84,
    name: 'fuelLeftAuxTankLevel',
    category: OffsetCategory.FUEL,
    description: 'left aux tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelLeftAuxTankCapacity: new Offset({
    value: 0xb88,
    name: 'fuelLeftAuxTankCapacity',
    category: OffsetCategory.FUEL,
    description: 'left aux tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelLeftTipTankLevel: new Offset({
    value: 0xb8c,
    name: 'fuelLeftTipTankLevel',
    category: OffsetCategory.FUEL,
    description: 'left tip tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelLeftTipTankCapacity: new Offset({
    value: 0xb90,
    name: 'fuelLeftTipTankCapacity',
    category: OffsetCategory.FUEL,
    description: 'left tip tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelRightMainTankLevel: new Offset({
    value: 0xb94,
    name: 'fuelRightMainTankLevel',
    category: OffsetCategory.FUEL,
    description: 'right main tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelRightMainTankCapacity: new Offset({
    value: 0xb98,
    name: 'fuelRightMainTankCapacity',
    category: OffsetCategory.FUEL,
    description: 'right main tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelRightAuxTankLevel: new Offset({
    value: 0xb9c,
    name: 'fuelRightAuxTankLevel',
    category: OffsetCategory.FUEL,
    description: 'right aux tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelRightAuxTankCapacity: new Offset({
    value: 0xba0,
    name: 'fuelRightAuxTankCapacity',
    category: OffsetCategory.FUEL,
    description: 'right aux tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelRightTipTankLevel: new Offset({
    value: 0xba4,
    name: 'fuelRightTipTankLevel',
    category: OffsetCategory.FUEL,
    description: 'right tip tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelRightTipTankCapacity: new Offset({
    value: 0xba8,
    name: 'fuelRightTipTankCapacity',
    category: OffsetCategory.FUEL,
    description: 'right tip tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  totalFuelCapacity: new Offset({
    value: 0x1240,
    name: 'totalFuelCapacity',
    category: OffsetCategory.FUEL,
    description: 'total fuel capacity - US gallons',
    type: Type.UInt32,
    permission: 'r'
  }),
  fuelCenter2TankLevel: new Offset({
    value: 0x1244,
    name: 'fuelCenter2TankLevel',
    category: OffsetCategory.FUEL,
    description: 'center 2 tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelCenter2TankCapacity: new Offset({
    value: 0x1248,
    name: 'fuelCenter2TankCapacity',
    category: OffsetCategory.FUEL,
    description: 'center 2 tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelCenter3TankLevel: new Offset({
    value: 0x124c,
    name: 'fuelCenter3TankLevel',
    category: OffsetCategory.FUEL,
    description: 'center 3 tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelCenter3TankCapacity: new Offset({
    value: 0x1250,
    name: 'fuelCenter3TankCapacity',
    category: OffsetCategory.FUEL,
    description: 'center 3 tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelExternal1TankLevel: new Offset({
    value: 0x1254,
    name: 'fuelExternal1TankLevel',
    category: OffsetCategory.FUEL,
    description: 'external 1 tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelExternal1TankCapacity: new Offset({
    value: 0x1258,
    name: 'fuelExternal1TankCapacity',
    category: OffsetCategory.FUEL,
    description: 'external 1 tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelExternal2TankLevel: new Offset({
    value: 0x125c,
    name: 'fuelExternal2TankLevel',
    category: OffsetCategory.FUEL,
    description: 'external 2 tank level - percent',
    convert: 'Math.round({VAL} / (128 * 65536) * 100)',
    type: Type.Int32,
    permission: 'rw'
  }),
  fuelExternal2TankCapacity: new Offset({
    value: 0x1260,
    name: 'fuelExternal2TankCapacity',
    category: OffsetCategory.FUEL,
    description: 'external 2 tank capacity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelTotalQuantity: new Offset({
    value: 0x1264,
    name: 'fuelTotalQuantity',
    category: OffsetCategory.FUEL,
    description: 'total fuel quantity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelSelectedQuantity: new Offset({
    value: 0x1268,
    name: 'fuelSelectedQuantity',
    category: OffsetCategory.FUEL,
    description: 'Selected fuel quantity - US gallons',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelTotalQuantityWeight: new Offset({
    value: 0x126c,
    name: 'fuelTotalQuantityWeight',
    category: OffsetCategory.FUEL,
    description: 'total fuel quantity weight - lb',
    type: Type.Int32,
    permission: 'r'
  })
};
