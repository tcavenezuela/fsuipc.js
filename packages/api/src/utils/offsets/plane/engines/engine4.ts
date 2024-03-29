import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const engine4: OffsetList = {
  engine4ThrottleLever: new Offset({
    value: 0xa54,
    name: 'engine4ThrottleLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 throttle lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine4PropLever: new Offset({
    value: 0xa56,
    name: 'engine4PropLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 prop lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine4MixtureLever: new Offset({
    value: 0xa58,
    name: 'engine4MixtureLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 prop lever - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine4StarterSwitchPosition: new Offset({
    value: 0xa5a,
    name: 'engine4StarterSwitchPosition',
    category: OffsetCategory.ENGINE,
    description:
      'engine4 start switch position - JET: 0=off 1=start 2=gen/alt - PROP: 0=off 1=right 2=left 3=both 4=start',
    type: Type.UInt16,
    permission: 'rw'
  }),
  engine4Firing: new Offset({
    value: 0xa5c,
    name: 'engine4Firing',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 combustion',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine4N2: new Offset({
    value: 0xa5e,
    name: 'engine4N2',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 N2 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine4N1: new Offset({
    value: 0xa60,
    name: 'engine4N1',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 N1 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine4PropRPM: new Offset({
    value: 0xa60,
    name: 'engine4PropRPM',
    category: OffsetCategory.ENGINE,
    description: 'derive RPM by multiplying by  - negative = counter-rotating propeller',
    convert: '{VAL} / 16384 / 65536',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine4ThrottleLeverControl: new Offset({
    value: 0xa62,
    name: 'engine4ThrottleLeverControl',
    category: OffsetCategory.ENGINE,
    description: 'engine4 throttle lever control - -4096 to +16384',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine4FuelFlowLbHourSSL: new Offset({
    value: 0xa68,
    name: 'engine4FuelFlowLbHourSSL',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel flow (lb per hour, sea level)',
    convert: '{VAL} / 128',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine4AntiIce: new Offset({
    value: 0xa7a,
    name: 'engine4AntiIce',
    category: OffsetCategory.ENGINE,
    description: 'engine4 anti-ice/carb heat active',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine4OilTemp: new Offset({
    value: 0xa80,
    name: 'engine4OilTemp',
    category: OffsetCategory.ENGINE,
    description: 'engine4 oil temp - celsius',
    convert: 'Math.round({VAL} * 140 / 16384)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine4OilPres: new Offset({
    value: 0xa82,
    name: 'engine4OilPres',
    category: OffsetCategory.ENGINE,
    description: 'engine4 oil pressure - PSI',
    convert: 'Math.round({VAL} * 55 / 16384)',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine4PressureRatio: new Offset({
    value: 0xa84,
    name: 'engine4PressureRatio',
    category: OffsetCategory.ENGINE,
    description: 'engine4 pressure ratio',
    convert: '{VAL} * 1.6 / 16384',
    type: Type.Int16,
    permission: 'r'
  }),
  engine4EGT: new Offset({
    value: 0xa86,
    name: 'engine4EGT',
    category: OffsetCategory.ENGINE,
    description: 'engine4 exhaust gas temperature - Trust only on jet engine - celsius',
    convert: 'Math.round({VAL} * 860 / 16384)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine4MP: new Offset({
    value: 0xa88,
    name: 'engine4MP',
    category: OffsetCategory.ENGINE,
    description: 'engine4 manifold pressure - inHg',
    convert: '{VAL} / 1024',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine4RPMScaler: new Offset({
    value: 0xa90,
    name: 'engine4RPMScaler',
    category: OffsetCategory.ENGINE,
    description: 'engine4 RPM Scaler - props: used to calculate RPM',
    type: Type.Int16,
    permission: 'r'
  }),
  engine4OilQuantity: new Offset({
    value: 0xa98,
    name: 'engine4OilQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine4 oil quantity - percent',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  engine4Vibration: new Offset({
    value: 0xa9c,
    name: 'engine4Vibration',
    category: OffsetCategory.ENGINE,
    description: 'engine4 vibration',
    convert: 'Math.round({VAL} * 5 / 16384)',
    type: Type.Int32,
    permission: 'r'
  }),
  engine4HydPres: new Offset({
    value: 0xaa0,
    name: 'engine4HydPres',
    category: OffsetCategory.ENGINE,
    description: 'engine4 hydraulic pressure - PSI',
    convert: '{VAL} / 4',
    type: Type.Int32,
    permission: 'r'
  }),
  engine4HydQuantity: new Offset({
    value: 0xaa4,
    name: 'engine4HydQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine4 hydraulic quantity - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int32,
    permission: 'r'
  }),
  engine4CHT: new Offset({
    value: 0xab0,
    name: 'engine4CHT',
    category: OffsetCategory.ENGINE,
    description: 'engine4 cylinder head temperature - F',
    type: Type.Double,
    permission: 'r'
  }),
  engine4ITT: new Offset({
    value: 0xab8,
    name: 'engine4ITT',
    category: OffsetCategory.ENGINE,
    description: 'engine4 turbine temperature - C',
    convert: '{VAL} / 16384',
    type: Type.Int32,
    permission: 'r'
  }),
  engine4Torque: new Offset({
    value: 0xabc,
    name: 'engine4Torque',
    category: OffsetCategory.ENGINE,
    description: 'engine4 torque - trust only for helo - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int32,
    permission: 'r'
  }),
  engine4FuelPres: new Offset({
    value: 0xac0,
    name: 'engine4FuelPres',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel pressure - PSI',
    convert: '{VAL} / 144',
    type: Type.Int32,
    permission: 'r'
  }),
  engine4FuelUsedSinceStart: new Offset({
    value: 0xad4,
    name: 'engine4FuelUsedSinceStart',
    category: OffsetCategory.ENGINE,
    description: 'engine4 used fuel since start - lb',
    type: Type.Single,
    permission: 'r'
  }),
  engine4FuelElapsedTime: new Offset({
    value: 0xad8,
    name: 'engine4FuelElapsedTime',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel elapsed time - h',
    type: Type.Single,
    permission: 'r'
  }),
  engine4FuelFlowLbHour: new Offset({
    value: 0xae0,
    name: 'engine4FuelFlowLbHour',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel elapsed time - lb/h',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TorqueFtLb: new Offset({
    value: 0xae8,
    name: 'engine4TorqueFtLb',
    category: OffsetCategory.ENGINE,
    description: 'engine4 fuel elapsed time - ft lb',
    type: Type.Single,
    permission: 'r'
  }),
  engine4TurbineN1: new Offset({
    value: 0x2300,
    name: 'engine4TurbineN1',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine N1 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineN2: new Offset({
    value: 0x2308,
    name: 'engine4TurbineN2',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine N2 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineCorrectedN1: new Offset({
    value: 0x2310,
    name: 'engine4TurbineCorrectedN1',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine corrected N1 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineCorrectedN2: new Offset({
    value: 0x2318,
    name: 'engine4TurbineCorrectedN2',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine corrected N2 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineCorrectedFuelFlow: new Offset({
    value: 0x2320,
    name: 'engine4TurbineCorrectedFuelFlow',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine corrected fuel flow - lb/h',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineTorque: new Offset({
    value: 0x2328,
    name: 'engine4TurbineTorque',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine corrected fuel flow - 0.0 to 1.0',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineEPR: new Offset({
    value: 0x2330,
    name: 'engine4TurbineEPR',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine EPR',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineITT: new Offset({
    value: 0x2338,
    name: 'engine4TurbineITT',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine ITT',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineAfterburnerActive: new Offset({
    value: 0x2348,
    name: 'engine4TurbineAfterburnerActive',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine afterburner active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine4TurbineJetThrust: new Offset({
    value: 0x234c,
    name: 'engine4TurbineJetThrust',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine jet thrust',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineTankSelector: new Offset({
    value: 0x2354,
    name: 'engine4TurbineTankSelector',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine tank selector',
    convert: 'fuelTank',
    mapping: true,
    type: Type.UInt32,
    permission: 'r'
  }),
  engine4TurbineUsedTank: new Offset({
    value: 0x2358,
    name: 'engine4TurbineUsedTank',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine used tank',
    type: Type.BitArray,
    length: 11,
    permission: 'r'
  }),
  engine4TurbineAvailableTankCount: new Offset({
    value: 0x235c,
    name: 'engine4TurbineAvailableTankCount',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine available tank count',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine4TurbineFuelFlow: new Offset({
    value: 0x2360,
    name: 'engine4TurbineFuelFlow',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine fuel flow',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineIsFuelAvailable: new Offset({
    value: 0x2368,
    name: 'engine4TurbineIsFuelAvailable',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine is fuel available flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine4TurbineBleedPressure: new Offset({
    value: 0x236c,
    name: 'engine4TurbineBleedPressure',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine bleed air pressure - lb/sq in',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineReverser: new Offset({
    value: 0x237c,
    name: 'engine4TurbineReverser',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine reverser position - 0.0 - 1.0 lb/sq in',
    convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineVibration: new Offset({
    value: 0x2384,
    name: 'engine4TurbineVibration',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine vibration',
    type: Type.Double,
    permission: 'r'
  }),
  engine4TurbineIgnition: new Offset({
    value: 0x238c,
    name: 'engine4TurbineIgnition',
    category: OffsetCategory.ENGINE,
    description: 'engine 4 turbine is fuel available flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
