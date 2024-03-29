import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const engine3: OffsetList = {
  engine3ThrottleLever: new Offset({
    value: 0x9bc,
    name: 'engine3ThrottleLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 throttle lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine3PropLever: new Offset({
    value: 0x9be,
    name: 'engine3PropLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 prop lever - percent - negative = reverse',
    convert: 'Math.round({VAL} < 0 ? {VAL} / 4096 * 100 : {VAL} / 16384 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine3MixtureLever: new Offset({
    value: 0x9c0,
    name: 'engine3MixtureLever',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 prop lever - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine3StarterSwitchPosition: new Offset({
    value: 0x9c2,
    name: 'engine3StarterSwitchPosition',
    category: OffsetCategory.ENGINE,
    description:
      'engine3 start switch position - JET: 0=off 1=start 2=gen/alt - PROP: 0=off 1=right 2=left 3=both 4=start',
    type: Type.UInt16,
    permission: 'rw'
  }),
  engine3Firing: new Offset({
    value: 0x9c4,
    name: 'engine3Firing',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 combustion',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine3N2: new Offset({
    value: 0x9c6,
    name: 'engine3N2',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 N2 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine3N1: new Offset({
    value: 0x9c8,
    name: 'engine3N1',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 N1 - also helo RPM %',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine3PropRPM: new Offset({
    value: 0x9c8,
    name: 'engine3PropRPM',
    category: OffsetCategory.ENGINE,
    description: 'derive RPM by multiplying by  - negative = counter-rotating propeller',
    convert: '{VAL} / 16384 / 65536',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine3ThrottleLeverControl: new Offset({
    value: 0x9ca,
    name: 'engine3ThrottleLeverControl',
    category: OffsetCategory.ENGINE,
    description: 'engine3 throttle lever control - -4096 to +16384',
    type: Type.Int16,
    permission: 'rw'
  }),
  engine3FuelFlowLbHourSSL: new Offset({
    value: 0x9d0,
    name: 'engine3FuelFlowLbHourSSL',
    category: OffsetCategory.ENGINE,
    description: 'engine3 fuel flow (lb per hour, sea level)',
    convert: '{VAL} / 128',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine3AntiIce: new Offset({
    value: 0x9e2,
    name: 'engine3AntiIce',
    category: OffsetCategory.ENGINE,
    description: 'engine3 anti-ice/carb heat active',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine3OilTemp: new Offset({
    value: 0x9e8,
    name: 'engine3OilTemp',
    category: OffsetCategory.ENGINE,
    description: 'engine3 oil temp - celsius',
    convert: 'Math.round({VAL} * 140 / 16384)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine3OilPres: new Offset({
    value: 0x9ea,
    name: 'engine3OilPres',
    category: OffsetCategory.ENGINE,
    description: 'engine3 oil pressure - PSI',
    convert: 'Math.round({VAL} * 55 / 16384)',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine3PressureRatio: new Offset({
    value: 0x9ec,
    name: 'engine3PressureRatio',
    category: OffsetCategory.ENGINE,
    description: 'engine3 pressure ratio',
    convert: '{VAL} * 1.6 / 16384',
    type: Type.Int16,
    permission: 'r'
  }),
  engine3EGT: new Offset({
    value: 0x9ee,
    name: 'engine3EGT',
    category: OffsetCategory.ENGINE,
    description: 'engine3 exhaust gas temperature - Trust only on jet engine - celsius',
    convert: 'Math.round({VAL} * 860 / 16384)',
    type: Type.Int16,
    permission: 'r'
  }),
  engine3MP: new Offset({
    value: 0x9f0,
    name: 'engine3MP',
    category: OffsetCategory.ENGINE,
    description: 'engine3 manifold pressure - inHg',
    convert: '{VAL} / 1024',
    type: Type.UInt16,
    permission: 'r'
  }),
  engine3RPMScaler: new Offset({
    value: 0x9f8,
    name: 'engine3RPMScaler',
    category: OffsetCategory.ENGINE,
    description: 'engine3 RPM Scaler - props: used to calculate RPM',
    type: Type.Int16,
    permission: 'r'
  }),
  engine3OilQuantity: new Offset({
    value: 0xa00,
    name: 'engine3OilQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine3 oil quantity - percent',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.Int32,
    permission: 'r'
  }),
  engine3Vibration: new Offset({
    value: 0xa04,
    name: 'engine3Vibration',
    category: OffsetCategory.ENGINE,
    description: 'engine3 vibration',
    convert: 'Math.round({VAL} * 5 / 16384)',
    type: Type.Int32,
    permission: 'r'
  }),
  engine3HydPres: new Offset({
    value: 0xa08,
    name: 'engine3HydPres',
    category: OffsetCategory.ENGINE,
    description: 'engine3 hydraulic pressure - PSI',
    convert: '{VAL} / 4',
    type: Type.Int32,
    permission: 'r'
  }),
  engine3HydQuantity: new Offset({
    value: 0xa0c,
    name: 'engine3HydQuantity',
    category: OffsetCategory.ENGINE,
    description: 'engine3 hydraulic quantity - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int32,
    permission: 'r'
  }),
  engine3CHT: new Offset({
    value: 0xa18,
    name: 'engine3CHT',
    category: OffsetCategory.ENGINE,
    description: 'engine3 cylinder head temperature - F',
    type: Type.Double,
    permission: 'r'
  }),
  engine3ITT: new Offset({
    value: 0xa20,
    name: 'engine3ITT',
    category: OffsetCategory.ENGINE,
    description: 'engine3 turbine temperature - C',
    convert: '{VAL} / 16384',
    type: Type.Int32,
    permission: 'r'
  }),
  engine3Torque: new Offset({
    value: 0xa24,
    name: 'engine3Torque',
    category: OffsetCategory.ENGINE,
    description: 'engine3 torque - trust only for helo - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.Int32,
    permission: 'r'
  }),
  engine3FuelPres: new Offset({
    value: 0xa28,
    name: 'engine3FuelPres',
    category: OffsetCategory.ENGINE,
    description: 'engine3 fuel pressure - PSI',
    convert: '{VAL} / 144',
    type: Type.Int32,
    permission: 'r'
  }),
  engine3FuelUsedSinceStart: new Offset({
    value: 0xa3c,
    name: 'engine3FuelUsedSinceStart',
    category: OffsetCategory.ENGINE,
    description: 'engine3 used fuel since start - lb',
    type: Type.Single,
    permission: 'r'
  }),
  engine3FuelElapsedTime: new Offset({
    value: 0xa40,
    name: 'engine3FuelElapsedTime',
    category: OffsetCategory.ENGINE,
    description: 'engine3 fuel elapsed time - h',
    type: Type.Single,
    permission: 'r'
  }),
  engine3FuelFlowLbHour: new Offset({
    value: 0xa48,
    name: 'engine3FuelFlowLbHour',
    category: OffsetCategory.ENGINE,
    description: 'engine3 fuel elapsed time - lb/h',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TorqueFtLb: new Offset({
    value: 0xa50,
    name: 'engine3TorqueFtLb',
    category: OffsetCategory.ENGINE,
    description: 'engine3 fuel elapsed time - ft lb',
    type: Type.Single,
    permission: 'r'
  }),
  engine3TurbineN1: new Offset({
    value: 0x2200,
    name: 'engine3TurbineN1',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine N1 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineN2: new Offset({
    value: 0x2208,
    name: 'engine3TurbineN2',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine N2 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineCorrectedN1: new Offset({
    value: 0x2210,
    name: 'engine3TurbineCorrectedN1',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine corrected N1 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineCorrectedN2: new Offset({
    value: 0x2218,
    name: 'engine3TurbineCorrectedN2',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine corrected N2 - percent',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineCorrectedFuelFlow: new Offset({
    value: 0x2220,
    name: 'engine3TurbineCorrectedFuelFlow',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine corrected fuel flow - lb/h',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineTorque: new Offset({
    value: 0x2228,
    name: 'engine3TurbineTorque',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine corrected fuel flow - 0.0 to 1.0',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineEPR: new Offset({
    value: 0x2230,
    name: 'engine3TurbineEPR',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine EPR',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineITT: new Offset({
    value: 0x2238,
    name: 'engine3TurbineITT',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine ITT',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineAfterburnerActive: new Offset({
    value: 0x2248,
    name: 'engine3TurbineAfterburnerActive',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine afterburner active',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine3TurbineJetThrust: new Offset({
    value: 0x224c,
    name: 'engine3TurbineJetThrust',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine jet thrust',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineTankSelector: new Offset({
    value: 0x2254,
    name: 'engine3TurbineTankSelector',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine tank selector',
    convert: 'fuelTank',
    mapping: true,
    type: Type.UInt32,
    permission: 'r'
  }),
  engine3TurbineUsedTank: new Offset({
    value: 0x2258,
    name: 'engine3TurbineUsedTank',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine used tank',
    type: Type.BitArray,
    length: 11,
    permission: 'r'
  }),
  engine3TurbineAvailableTankCount: new Offset({
    value: 0x225c,
    name: 'engine3TurbineAvailableTankCount',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine available tank count',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine3TurbineFuelFlow: new Offset({
    value: 0x2260,
    name: 'engine3TurbineFuelFlow',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine fuel flow',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineIsFuelAvailable: new Offset({
    value: 0x2268,
    name: 'engine3TurbineIsFuelAvailable',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine is fuel available flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  engine3TurbineBleedPressure: new Offset({
    value: 0x226c,
    name: 'engine3TurbineBleedPressure',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine bleed air pressure - lb/sq in',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineReverser: new Offset({
    value: 0x227c,
    name: 'engine3TurbineReverser',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine reverser position - 0.0 - 1.0 lb/sq in',
    convert: 'Math.round(+(+({VAL}).toFixed(4) * 100).toFixed(2))',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineVibration: new Offset({
    value: 0x2284,
    name: 'engine3TurbineVibration',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine vibration',
    type: Type.Double,
    permission: 'r'
  }),
  engine3TurbineIgnition: new Offset({
    value: 0x228c,
    name: 'engine3TurbineIgnition',
    category: OffsetCategory.ENGINE,
    description: 'engine 3 turbine is fuel available flag',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
