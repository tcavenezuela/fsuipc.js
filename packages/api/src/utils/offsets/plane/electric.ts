import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const electric: OffsetList = {
  masterBatterySwitch: new Offset({
    value: 0x281c,
    name: 'masterBatterySwitch',
    category: OffsetCategory.ELECTRIC,
    description: 'battery master switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  totalLoadAmp: new Offset({
    value: 0x2824,
    name: 'totalLoadAmp',
    category: OffsetCategory.ELECTRIC,
    description: 'total load amps',
    type: Type.Double,
    permission: 'r'
  }),
  batteryLoad: new Offset({
    value: 0x282c,
    name: 'batteryLoad',
    category: OffsetCategory.ELECTRIC,
    description: 'battery load',
    type: Type.Double,
    permission: 'r'
  }),
  batteryVoltage: new Offset({
    value: 0x2834,
    name: 'batteryVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'battery voltage',
    type: Type.Double,
    permission: 'r'
  }),
  mainBusVoltage: new Offset({
    value: 0x2840,
    name: 'mainBusVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'main bus voltage',
    type: Type.Double,
    permission: 'r'
  }),
  mainBusAmps: new Offset({
    value: 0x2848,
    name: 'mainBusAmps',
    category: OffsetCategory.ELECTRIC,
    description: 'main bus amps',
    type: Type.Double,
    permission: 'r'
  }),
  avionicsBusVoltage: new Offset({
    value: 0x2850,
    name: 'avionicsBusVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'avionics bus voltage',
    type: Type.Double,
    permission: 'r'
  }),
  avionicsBusAmps: new Offset({
    value: 0x2858,
    name: 'avionicsBusAmps',
    category: OffsetCategory.ELECTRIC,
    description: 'avionics bus amps',
    type: Type.Double,
    permission: 'r'
  }),
  hotBatteryBusVoltage: new Offset({
    value: 0x2860,
    name: 'hotBatteryBusVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'hot battery bus voltage',
    type: Type.Double,
    permission: 'r'
  }),
  hotBatteryBusAmps: new Offset({
    value: 0x2868,
    name: 'hotBatteryBusAmps',
    category: OffsetCategory.ELECTRIC,
    description: 'hot battery bus amps',
    type: Type.Double,
    permission: 'r'
  }),
  batteryBusVoltage: new Offset({
    value: 0x2870,
    name: 'batteryBusVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'battery bus voltage',
    type: Type.Double,
    permission: 'r'
  }),
  batteryBusAmps: new Offset({
    value: 0x2878,
    name: 'batteryBusAmps',
    category: OffsetCategory.ELECTRIC,
    description: 'battery bus amps',
    type: Type.Double,
    permission: 'r'
  }),
  generatorAlternator1BusVoltage: new Offset({
    value: 0x2880,
    name: 'generatorAlternator1BusVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'generator alternator 1 bus voltage',
    type: Type.Double,
    permission: 'r'
  }),
  generatorAlternator1BusAmps: new Offset({
    value: 0x2888,
    name: 'generatorAlternator1BusAmps',
    category: OffsetCategory.ELECTRIC,
    description: 'generator alternator 1 bus amps',
    type: Type.Double,
    permission: 'r'
  }),
  generatorAlternator2BusVoltage: new Offset({
    value: 0x2890,
    name: 'generatorAlternator2BusVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'generator alternator 2 bus voltage',
    type: Type.Double,
    permission: 'r'
  }),
  generatorAlternator2BusAmps: new Offset({
    value: 0x2898,
    name: 'generatorAlternator2BusAmps',
    category: OffsetCategory.ELECTRIC,
    description: 'generator alternator 2 bus amps',
    type: Type.Double,
    permission: 'r'
  }),
  generatorAlternator3BusVoltage: new Offset({
    value: 0x28a0,
    name: 'generatorAlternator3BusVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'generator alternator 3 bus voltage',
    type: Type.Double,
    permission: 'r'
  }),
  generatorAlternator3BusAmps: new Offset({
    value: 0x28a8,
    name: 'generatorAlternator3BusAmps',
    category: OffsetCategory.ELECTRIC,
    description: 'generator alternator 3 bus amps',
    type: Type.Double,
    permission: 'r'
  }),
  generatorAlternator4BusVoltage: new Offset({
    value: 0x28b0,
    name: 'generatorAlternator4BusVoltage',
    category: OffsetCategory.ELECTRIC,
    description: 'generator alternator 4 bus voltage',
    type: Type.Double,
    permission: 'r'
  }),
  generatorAlternator4BusAmps: new Offset({
    value: 0x28b8,
    name: 'generatorAlternator4BusAmps',
    category: OffsetCategory.ELECTRIC,
    description: 'generator alternator 4 bus amps',
    type: Type.Double,
    permission: 'r'
  })
};
