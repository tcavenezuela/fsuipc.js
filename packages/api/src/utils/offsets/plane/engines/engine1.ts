import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const engine1: OffsetList = {
  engine1ThrottleLever: new Offset({
    value: 0x88c,
    name: 'engine1ThrottleLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 throttle lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine1PropLever: new Offset({
    value: 0x88e,
    name: 'engine1PropLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 prop lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine1MixtureLever: new Offset({
    value: 0x890,
    name: 'engine1MixtureLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 prop lever - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine1StarterSwitchPosition: new Offset({
    value: 0x892,
    name: 'engine1StarterSwitchPosition',
    category: OffsetCategory.ENGINE,
    description:
      'engine1 start switch position - JET: 0=off 1=start 2=gen/alt - PROP: 0=off 1=right 2=left 3=both 4=start',
    type: Type.UInt16,
    permission: 'rw'
  }),
  engine1Firing: new Offset({
    value: 0x894,
    name: 'engine1Firing',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 combustion',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine1N2: new Offset({
    value: 0x896,
    name: 'engine1N2',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 N2 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine1N1: new Offset({
    value: 0x898,
    name: 'engine1N1',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 N1 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine1PropRPM: new Offset({
    value: 0x898,
    name: 'engine1PropRPM',
    category: OffsetCategory.ENGINE,
    description: 'derive RPM by multiplying by  - negative = counter-rotating propeller',
    convert: '{VAL} / 16384 / 65536',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine1ThrottleLeverControl: new Offset({
    value: 0x89a,
    name: 'engine1ThrottleLeverControl',
    category: OffsetCategory.ENGINE,
    description: 'engine1 throttle lever control - -4096 to +16384',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine1FuelFlowLbHourSSL: new Offset({
    value: 0x8a0,
    name: 'engine1FuelFlowLbHourSSL',
    category: OffsetCategory.ENGINE,
    description: 'engine1 fuel flow (lb per hour, sea level)',
    convert: '{VAL} / 128',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine1AntiIce: new Offset({
    value: 0x8b2,
    name: 'engine1AntiIce',
    category: OffsetCategory.ENGINE,
    description: 'engine1 anti-ice/carb heat active',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine1OilTemp: new Offset({
    value: 0x8b8,
    name: 'engine1OilTemp',
    category: OffsetCategory.ENGINE,
    description: 'engine1 oil temp - celsius',
    convert: 'Math.round({VAL} * 140 / 16384)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine1OilPres: new Offset({
    value: 0x8ba,
    name: 'engine1OilPres',
    category: OffsetCategory.ENGINE,
    description: 'engine1 oil pressure - PSI',
    convert: 'Math.round({VAL} * 55 / 16384)',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine1PressureRatio: new Offset({
    value: 0x8bc,
    name: 'engine1PressureRatio',
    category: OffsetCategory.ENGINE,
    description: 'engine1 pressure ratio',
    convert: '{VAL} * 1.6 / 16384',
    type: Type.Int16,
    permission: 'r'
  }),
  engine1EGT: new Offset({
    value: 0x8be,
    name: 'engine1EGT',
    category: OffsetCategory.ENGINE,
    description: 'engine1 exhaust gas temperature - Trust only on jet engine - celsius',
    convert: 'Math.round({VAL} * 860 / 16384)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine1MP: new Offset({
    value: 0x8c0,
    name: 'engine1MP',
    category: OffsetCategory.ENGINE,
    description: 'engine1 manifold pressure - inHg',
    convert: '{VAL} / 1024',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine1RPMScaler: new Offset({
    value: 0x8c8,
    name: 'engine1RPMScaler',
    category: OffsetCategory.ENGINE,
    description: 'engine1 RPM Scaler - props: used to calculate RPM',
    type: Type.Int16,
    permission: 'r'
  }),
  engine1OilQuantity: new Offset({
    value: 0x8d0,
    name: 'engine1OilQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine1 oil quantity - percent',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  engine1Vibration: new Offset({
    value: 0x8d4,
    name: 'engine1Vibration',
    category: OffsetCategory.ENGINE,
    description: 'engine1 vibration',
    convert: 'Math.round({VAL} * 5 / 16384)',
    type: Type.Int32,
    permission: 'r'
  }),
  engine1HydPres: new Offset({
    value: 0x8d8,
    name: 'engine1HydPres',
    category: OffsetCategory.ENGINE,
    description: 'engine1 hydraulic pressure - PSI',
    convert: '{VAL} / 4',
    type: Type.Int32,
    permission: 'r'
  }),
  engine1HydQuantity: new Offset({
    value: 0x8dc,
    name: 'engine1HydQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine1 hydraulic quantity - PSI',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int32,
    permission: 'r'
  }),
  engine1CHT: new Offset({
    value: 0x8e8,
    name: 'engine1CHT',
    category: OffsetCategory.ENGINE,
    description: 'engine1 cylinder head temperature - F',
    type: Type.Double,
    permission: 'r'
  }),
  engine1ITT: new Offset({
    value: 0x8f0,
    name: 'engine1ITT',
    category: OffsetCategory.ENGINE,
    description: 'engine1 turbine temperature - C',
    convert: '{VAL} / 16384',
    type: Type.Int32,
    permission: 'r'
  }),
  engine1Torque: new Offset({
    value: 0x8f4,
    name: 'engine1Torque',
    category: OffsetCategory.ENGINE,
    description: 'engine1 torque - trust only for helo - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int32,
    permission: 'r'
  }),
  engine1FuelPres: new Offset({
    value: 0x8f8,
    name: 'engine1FuelPres',
    category: OffsetCategory.ENGINE,
    description: 'engine1 fuel pressure - PSI',
    convert: '{VAL} / 144',
    type: Type.Int32,
    permission: 'r'
  }),
  engine1FuelUsedSinceStart: new Offset({
    value: 0x90c,
    name: 'engine1FuelUsedSinceStart',
    category: OffsetCategory.ENGINE,
    description: 'engine1 used fuel since start - lb',
    type: Type.Single,
    permission: 'r'
  }),
  engine1FuelElapsedTime: new Offset({
    value: 0x910,
    name: 'engine1FuelElapsedTime',
    category: OffsetCategory.ENGINE,
    description: 'engine1 fuel elapsed time - h',
    type: Type.Single,
    permission: 'r'
  }),
  engine1FuelFlowLbHour: new Offset({
    value: 0x918,
    name: 'engine1FuelFlowLbHour',
    category: OffsetCategory.ENGINE,
    description: 'engine1 fuel elapsed time - lb/h',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TorqueFtLb: new Offset({
    value: 0x920,
    name: 'engine1TorqueFtLb',
    category: OffsetCategory.ENGINE,
    description: 'engine1 fuel elapsed time - ft lb',
    type: Type.Single,
    permission: 'r'
  }),
  engine1TurbineN1: new Offset({
    value: 0x2000,
    name: 'engine1TurbineN1',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine N1 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineN2: new Offset({
    value: 0x2008,
    name: 'engine1TurbineN2',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine N2 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineCorrectedN1: new Offset({
    value: 0x2010,
    name: 'engine1TurbineCorrectedN1',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine corrected N1 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineCorrectedN2: new Offset({
    value: 0x2018,
    name: 'engine1TurbineCorrectedN2',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine corrected N2 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineCorrectedFuelFlow: new Offset({
    value: 0x2020,
    name: 'engine1TurbineCorrectedFuelFlow',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine corrected fuel flow - lb/h',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineTorque: new Offset({
    value: 0x2028,
    name: 'engine1TurbineTorque',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine corrected fuel flow - 0.0 to 1.0',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineEPR: new Offset({
    value: 0x2030,
    name: 'engine1TurbineEPR',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine EPR',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineITT: new Offset({
    value: 0x2038,
    name: 'engine1TurbineITT',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine ITT',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineAfterburnerActive: new Offset({
    value: 0x2048,
    name: 'engine1TurbineAfterburnerActive',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine afterburner active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine1TurbineJetThrust: new Offset({
    value: 0x204c,
    name: 'engine1TurbineJetThrust',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine jet thrust',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineTankSelector: new Offset({
    value: 0x2054,
    name: 'engine1TurbineTankSelector',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine tank selector',
    convert: 'fuelTank',
    mapping: true,
    type: Type.UInt32,
    permission: 'r'
  }),
  engine1TurbineUsedTank: new Offset({
    value: 0x2058,
    name: 'engine1TurbineUsedTank',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine used tank',
    type: Type.BitArray,
    length: 11,
    permission: 'r'
  }),
  engine1TurbineAvailableTankCount: new Offset({
    value: 0x205c,
    name: 'engine1TurbineAvailableTankCount',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine available tank count',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine1TurbineFuelFlow: new Offset({
    value: 0x2060,
    name: 'engine1TurbineFuelFlow',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine fuel flow',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineIsFuelAvailable: new Offset({
    value: 0x2068,
    name: 'engine1TurbineIsFuelAvailable',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine is fuel available flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine1TurbineBleedPressure: new Offset({
    value: 0x206c,
    name: 'engine1TurbineBleedPressure',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine bleed air pressure - lb/sq in',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineReverser: new Offset({
    value: 0x207c,
    name: 'engine1TurbineReverser',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine reverser position - 0.0 - 1.0 lb/sq in',
    convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineVibration: new Offset({
    value: 0x2084,
    name: 'engine1TurbineVibration',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine vibration',
    type: Type.Double,
    permission: 'r'
  }),
  engine1TurbineIgnition: new Offset({
    value: 0x208c,
    name: 'engine1TurbineIgnition',
    category: OffsetCategory.ENGINE,
    description: 'engine 1 turbine is fuel available flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
