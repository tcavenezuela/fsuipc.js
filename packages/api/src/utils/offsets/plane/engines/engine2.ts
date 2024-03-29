import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const engine2: OffsetList = {
  engine2ThrottleLever: new Offset({
    value: 0x924,
    name: 'engine2ThrottleLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 throttle lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine2PropLever: new Offset({
    value: 0x926,
    name: 'engine2PropLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 prop lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine2MixtureLever: new Offset({
    value: 0x928,
    name: 'engine2MixtureLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 prop lever - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine2StarterSwitchPosition: new Offset({
    value: 0x92a,
    name: 'engine2StarterSwitchPosition',
    category: OffsetCategory.ENGINE,
    description:
      'engine2 start switch position - JET: 0=off 1=start 2=gen/alt - PROP: 0=off 1=right 2=left 3=both 4=start',
    type: Type.UInt16,
    permission: 'rw'
  }),
  engine2Firing: new Offset({
    value: 0x92c,
    name: 'engine2Firing',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 combustion',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine2N2: new Offset({
    value: 0x92e,
    name: 'engine2N2',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 N2 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine2N1: new Offset({
    value: 0x930,
    name: 'engine2N1',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 N1 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine2PropRPM: new Offset({
    value: 0x930,
    name: 'engine2PropRPM',
    category: OffsetCategory.ENGINE,
    description: 'derive RPM by multiplying by  - negative = counter-rotating propeller',
    convert: '{VAL} / 16384 / 65536',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine2ThrottleLeverControl: new Offset({
    value: 0x932,
    name: 'engine2ThrottleLeverControl',
    category: OffsetCategory.ENGINE,
    description: 'engine2 throttle lever control - -4096 to +16384',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine2FuelFlowLbHourSSL: new Offset({
    value: 0x938,
    name: 'engine2FuelFlowLbHourSSL',
    category: OffsetCategory.ENGINE,
    description: 'engine2 fuel flow (lb per hour, sea level)',
    convert: '{VAL} / 128',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine2AntiIce: new Offset({
    value: 0x94a,
    name: 'engine2AntiIce',
    category: OffsetCategory.ENGINE,
    description: 'engine2 anti-ice/carb heat active',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine2OilTemp: new Offset({
    value: 0x950,
    name: 'engine2OilTemp',
    category: OffsetCategory.ENGINE,
    description: 'engine2 oil temp - celsius',
    convert: 'Math.round({VAL} * 140 / 16384)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine2OilPres: new Offset({
    value: 0x952,
    name: 'engine2OilPres',
    category: OffsetCategory.ENGINE,
    description: 'engine2 oil pressure - PSI',
    convert: 'Math.round({VAL} * 55 / 16384)',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine2PressureRatio: new Offset({
    value: 0x954,
    name: 'engine2PressureRatio',
    category: OffsetCategory.ENGINE,
    description: 'engine2 pressure ratio',
    convert: '{VAL} * 1.6 / 16384',
    type: Type.Int16,
    permission: 'r'
  }),
  engine2EGT: new Offset({
    value: 0x956,
    name: 'engine2EGT',
    category: OffsetCategory.ENGINE,
    description: 'engine2 exhaust gas temperature - Trust only on jet engine - celsius',
    convert: 'Math.round({VAL} * 860 / 16384)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine2MP: new Offset({
    value: 0x958,
    name: 'engine2MP',
    category: OffsetCategory.ENGINE,
    description: 'engine2 manifold pressure - inHg',
    convert: '{VAL} / 1024',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine2RPMScaler: new Offset({
    value: 0x960,
    name: 'engine2RPMScaler',
    category: OffsetCategory.ENGINE,
    description: 'engine2 RPM Scaler - props: used to calculate RPM',
    type: Type.Int16,
    permission: 'r'
  }),
  engine2OilQuantity: new Offset({
    value: 0x968,
    name: 'engine2OilQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine2 oil quantity - percent',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  engine2Vibration: new Offset({
    value: 0x96c,
    name: 'engine2Vibration',
    category: OffsetCategory.ENGINE,
    description: 'engine2 vibration',
    convert: 'Math.round({VAL} * 5 / 16384)',
    type: Type.Int32,
    permission: 'r'
  }),
  engine2HydPres: new Offset({
    value: 0x970,
    name: 'engine2HydPres',
    category: OffsetCategory.ENGINE,
    description: 'engine2 hydraulic pressure - PSI',
    convert: '{VAL} / 4',
    type: Type.Int32,
    permission: 'r'
  }),
  engine2HydQuantity: new Offset({
    value: 0x974,
    name: 'engine2HydQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine2 hydraulic quantity - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int32,
    permission: 'r'
  }),
  engine2CHT: new Offset({
    value: 0x980,
    name: 'engine2CHT',
    category: OffsetCategory.ENGINE,
    description: 'engine2 cylinder head temperature - F',
    type: Type.Double,
    permission: 'r'
  }),
  engine2ITT: new Offset({
    value: 0x988,
    name: 'engine2ITT',
    category: OffsetCategory.ENGINE,
    description: 'engine2 turbine temperature - C',
    convert: '{VAL} / 16384',
    type: Type.Int32,
    permission: 'r'
  }),
  engine2Torque: new Offset({
    value: 0x98c,
    name: 'engine2Torque',
    category: OffsetCategory.ENGINE,
    description: 'engine2 torque - trust only for helo - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int32,
    permission: 'r'
  }),
  engine2FuelPres: new Offset({
    value: 0x990,
    name: 'engine2FuelPres',
    category: OffsetCategory.ENGINE,
    description: 'engine2 fuel pressure - PSI',
    convert: '{VAL} / 144',
    type: Type.Int32,
    permission: 'r'
  }),
  engine2FuelUsedSinceStart: new Offset({
    value: 0x9a4,
    name: 'engine2FuelUsedSinceStart',
    category: OffsetCategory.ENGINE,
    description: 'engine2 used fuel since start - lb',
    type: Type.Single,
    permission: 'r'
  }),
  engine2FuelElapsedTime: new Offset({
    value: 0x9a8,
    name: 'engine2FuelElapsedTime',
    category: OffsetCategory.ENGINE,
    description: 'engine2 fuel elapsed time - h',
    type: Type.Single,
    permission: 'r'
  }),
  engine2FuelFlowLbHour: new Offset({
    value: 0x9b0,
    name: 'engine2FuelFlowLbHour',
    category: OffsetCategory.ENGINE,
    description: 'engine2 fuel elapsed time - lb/h',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TorqueFtLb: new Offset({
    value: 0x9b8,
    name: 'engine2TorqueFtLb',
    category: OffsetCategory.ENGINE,
    description: 'engine2 fuel elapsed time - ft lb',
    type: Type.Single,
    permission: 'r'
  }),
  engine2TurbineN1: new Offset({
    value: 0x2100,
    name: 'engine2TurbineN1',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine N1 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineN2: new Offset({
    value: 0x2108,
    name: 'engine2TurbineN2',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine N2 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineCorrectedN1: new Offset({
    value: 0x2110,
    name: 'engine2TurbineCorrectedN1',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine corrected N1 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineCorrectedN2: new Offset({
    value: 0x2118,
    name: 'engine2TurbineCorrectedN2',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine corrected N2 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineCorrectedFuelFlow: new Offset({
    value: 0x2120,
    name: 'engine2TurbineCorrectedFuelFlow',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine corrected fuel flow - lb/h',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineTorque: new Offset({
    value: 0x2128,
    name: 'engine2TurbineTorque',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine corrected fuel flow - 0.0 to 1.0',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineEPR: new Offset({
    value: 0x2130,
    name: 'engine2TurbineEPR',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine EPR',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineITT: new Offset({
    value: 0x2138,
    name: 'engine2TurbineITT',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine ITT',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineAfterburnerActive: new Offset({
    value: 0x2148,
    name: 'engine2TurbineAfterburnerActive',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine afterburner active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine2TurbineJetThrust: new Offset({
    value: 0x214c,
    name: 'engine2TurbineJetThrust',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine jet thrust',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineTankSelector: new Offset({
    value: 0x2154,
    name: 'engine2TurbineTankSelector',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine tank selector',
    convert: 'fuelTank',
    mapping: true,
    type: Type.Int32,
    permission: 'r'
  }),
  engine2TurbineUsedTank: new Offset({
    value: 0x2158,
    name: 'engine2TurbineUsedTank',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine used tank',
    type: Type.BitArray,
    length: 11,
    permission: 'r'
  }),
  engine2TurbineAvailableTankCount: new Offset({
    value: 0x215c,
    name: 'engine2TurbineAvailableTankCount',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine available tank count',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine2TurbineFuelFlow: new Offset({
    value: 0x2160,
    name: 'engine2TurbineFuelFlow',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine fuel flow',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineIsFuelAvailable: new Offset({
    value: 0x2168,
    name: 'engine2TurbineIsFuelAvailable',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine is fuel available flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine2TurbineBleedPressure: new Offset({
    value: 0x216c,
    name: 'engine2TurbineBleedPressure',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine bleed air pressure - lb/sq in',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineReverser: new Offset({
    value: 0x217c,
    name: 'engine2TurbineReverser',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine reverser position - 0.0 - 1.0 lb/sq in',
    convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineVibration: new Offset({
    value: 0x2184,
    name: 'engine2TurbineVibration',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine vibration',
    type: Type.Double,
    permission: 'r'
  }),
  engine2TurbineIgnition: new Offset({
    value: 0x218c,
    name: 'engine2TurbineIgnition',
    category: OffsetCategory.ENGINE,
    description: 'engine 2 turbine is fuel available flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
