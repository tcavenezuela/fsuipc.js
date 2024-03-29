import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { weatherAtAircraft } from './weather/at-aircraft';
import { weatherSettings } from './weather/settings';

export const weather: OffsetList = {
  metarStationAltitude: new Offset({
    value: 0x4b4,
    name: 'metarStationAltitude',
    category: OffsetCategory.WEATHER,
    description: 'METAR station altitude - ft',
    type: Type.UInt16,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  }),
  windSurfaceTurbulenceGustSpeed: new Offset({
    value: 0x4ba,
    name: 'windSurfaceTurbulenceGustSpeed',
    category: OffsetCategory.WEATHER,
    description: 'METAR station altitude - kt',
    type: Type.UInt16,
    convert: '+({VAL}).toFixed(2)',
    permission: 'r'
  }),
  metarBarometricDrift: new Offset({
    value: 0x4bc,
    name: 'metarBarometricDrift',
    category: OffsetCategory.WEATHER,
    description:
      'METAR barometric drift - difference between aircraft/METAR QNH. Adding drift will give correct value for ATIS report',
    type: Type.UInt16,
    convert: '{VAL} / 16',
    permission: 'r'
  }),
  metarVisibility: new Offset({
    value: 0x4c0,
    name: 'metarVisibility',
    category: OffsetCategory.WEATHER,
    description: 'METAR visibility - sm',
    type: Type.UInt16,
    convert: '{VAL} / 100',
    permission: 'r'
  }),
  metarCloudThunderBase: new Offset({
    value: 0x4c2,
    name: 'metarCloudThunderBase',
    category: OffsetCategory.WEATHER,
    description: 'METAR visibility - ft',
    type: Type.UInt16,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  }),
  metarCloudBaseLow: new Offset({
    value: 0x4c4,
    name: 'metarCloudBaseLow',
    category: OffsetCategory.WEATHER,
    description: 'METAR cloud base low - ft',
    type: Type.UInt16,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  }),
  metarCloudBaseHigh: new Offset({
    value: 0x4c6,
    name: 'metarCloudBaseHigh',
    category: OffsetCategory.WEATHER,
    description: 'METAR cloud base high - ft',
    type: Type.UInt16,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  }),
  dewPoint: new Offset({
    value: 0x4c8,
    name: 'dewPoint',
    category: OffsetCategory.WEATHER,
    description: 'dew point - FS2000+',
    type: Type.Int16,
    convert: '{VAL} / 256',
    permission: 'r'
  }),
  precipitationRate: new Offset({
    value: 0x4c8,
    name: 'precipitationRate',
    category: OffsetCategory.WEATHER,
    description: 'precipitation rate - FS2000+ - 0 to 5',
    type: Type.Byte,
    permission: 'r'
  }),
  precipitationType: new Offset({
    value: 0x4cc,
    name: 'precipitationType',
    category: OffsetCategory.WEATHER,
    description: 'precipitation type - FS2000+ - 0 to 5',
    type: Type.Byte,
    convert: 'precipitationType',
    mapping: true,
    permission: 'r'
  }),
  cloudThunderCoverage: new Offset({
    value: 0x4cd,
    name: 'cloudThunderCoverage',
    category: OffsetCategory.WEATHER,
    description: 'cloud thunder coverage - octa',
    type: Type.Byte,
    permission: 'r'
  }),
  cloudLowCoverage: new Offset({
    value: 0x4ce,
    name: 'cloudLowCoverage',
    category: OffsetCategory.WEATHER,
    description: 'cloud low coverage - octa',
    type: Type.Byte,
    permission: 'r'
  }),
  cloudHighCoverage: new Offset({
    value: 0x4cf,
    name: 'cloudHighCoverage',
    category: OffsetCategory.WEATHER,
    description: 'cloud high coverage - octa',
    type: Type.Byte,
    permission: 'r'
  }),
  precipitationControl: new Offset({
    value: 0x4d2,
    name: 'precipitationControl',
    category: OffsetCategory.WEATHER,
    description: 'hi-byte type 0-2 - low-byte rate 0-5 - writing 0xFFFF release control',
    type: Type.UInt16,
    permission: 'w'
  }),
  dewPointControl: new Offset({
    value: 0x4d4,
    name: 'dewPointControl',
    category: OffsetCategory.WEATHER,
    description: 'degrees / 256 - 0x8000 release control',
    type: Type.UInt16,
    permission: 'w'
  }),
  surfaceWindSpeed: new Offset({
    value: 0x4d8,
    name: 'surfaceWindSpeed',
    category: OffsetCategory.WEATHER,
    description: 'surface wind speed - FS2000+ - kts',
    type: Type.UInt16,
    permission: 'r'
  }),
  surfaceWindDirection: new Offset({
    value: 0x4da,
    name: 'surfaceWindDirection',
    category: OffsetCategory.WEATHER,
    description: 'surface wind direction - FS2000+ - deg MAG',
    type: Type.UInt16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r'
  }),
  unlimitedVisibility: new Offset({
    value: 0xbf8,
    name: 'unlimitedVisibility',
    category: OffsetCategory.WEATHER,
    description: 'unlimited visibility value - sm',
    type: Type.Int32,
    convert: '+({VAL} / 1600).toFixed(2)',
    permission: 'rw'
  }),
  cloudTypeAtAircraftAltitude: new Offset({
    value: 0xe84,
    name: 'cloudTypeAtAircraftAltitude',
    category: OffsetCategory.WEATHER,
    description: 'cloud type at aircraft atltitude - 0-10',
    type: Type.Byte,
    permission: 'r'
  }),
  cloudCoverageAtAircraftAltitude: new Offset({
    value: 0xe85,
    name: 'cloudCoverageAtAircraftAltitude',
    category: OffsetCategory.WEATHER,
    description: 'cloud coverage at aircraft atltitude - okta',
    type: Type.Byte,
    permission: 'r'
  }),
  cloudIcingAtAircraftAltitude: new Offset({
    value: 0xe86,
    name: 'cloudIcingAtAircraftAltitude',
    category: OffsetCategory.WEATHER,
    description: 'cloud icing at aircraft atltitude - 0-4',
    type: Type.UInt16,
    permission: 'r'
  }),
  cloudTurbulenceAtAircraftAltitude: new Offset({
    value: 0xe88,
    name: 'cloudTurbulenceAtAircraftAltitude',
    category: OffsetCategory.WEATHER,
    description: 'cloud turbulence at aircraft atltitude - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  visibility: new Offset({
    value: 0xe8a,
    name: 'visibility',
    category: OffsetCategory.WEATHER,
    description: 'current visibility - sm',
    convert: '+({VAL} / 100).toFixed(2)',
    type: Type.Int16,
    permission: 'r'
  }),
  OAT: new Offset({
    value: 0xe8c,
    name: 'OAT',
    category: OffsetCategory.WEATHER,
    description: 'current outside air temperature (OAT) - celsius',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  interpolatedDewPoint: new Offset({
    value: 0xe8e,
    name: 'interpolatedDewPoint',
    category: OffsetCategory.WEATHER,
    description: 'dew point interpolated for aircraft altitude - celsius',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  windSpeed: new Offset({
    value: 0xe90,
    name: 'windSpeed',
    category: OffsetCategory.WEATHER,
    description: 'wind speed at aircraft - kt',
    type: Type.UInt16,
    permission: 'r'
  }),
  windDirection: new Offset({
    value: 0xe92,
    name: 'windDirection',
    category: OffsetCategory.WEATHER,
    description: 'wind direction at aircraft - TRUE degrees',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  windGust: new Offset({
    value: 0xe94,
    name: 'windGust',
    category: OffsetCategory.WEATHER,
    description: 'wind gust at aircraft - kt',
    type: Type.UInt16,
    permission: 'r'
  }),
  windDirectionalVariation: new Offset({
    value: 0xe96,
    name: 'windDirectionalVariation',
    category: OffsetCategory.WEATHER,
    description: 'wind directional variation at aircraft - TRUE degrees',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  windTurbulence: new Offset({
    value: 0xe98,
    name: 'windTurbulence',
    category: OffsetCategory.WEATHER,
    description: 'wind turbulence at aircraft atltitude - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  totalAirTemperature: new Offset({
    value: 0x11d0,
    name: 'totalAirTemperature',
    category: OffsetCategory.WEATHER,
    description: 'total air temperature',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  ...weatherAtAircraft,
  ...weatherSettings
};
