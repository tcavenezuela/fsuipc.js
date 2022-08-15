import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const weatherAtAircraft: OffsetList = {
  upperCloudCeiling: new Offset({
    value: 0xe9a,
    name: 'upperCloudCeiling',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud layer ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperCloudBase: new Offset({
    value: 0xe9c,
    name: 'upperCloudBase',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud layer base - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperCloudCoverage: new Offset({
    value: 0xe9e,
    name: 'upperCloudCoverage',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud layer coverage - oktas',
    convert: 'Math.round(({VAL} + 1) / 8192)',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperCloudVariation: new Offset({
    value: 0xea0,
    name: 'upperCloudVariation',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud layer variation - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerCloudCeiling: new Offset({
    value: 0xea2,
    name: 'lowerCloudCeiling',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud layer ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerCloudBase: new Offset({
    value: 0xea4,
    name: 'lowerCloudBase',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud layer base - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerCloudCoverage: new Offset({
    value: 0xea6,
    name: 'lowerCloudCoverage',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud layer coverage - oktas',
    convert: 'Math.round(({VAL} + 1) / 8192)',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerCloudVariation: new Offset({
    value: 0xea8,
    name: 'lowerCloudVariation',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud layer variation - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  stormCloudCeiling: new Offset({
    value: 0xeaa,
    name: 'stormCloudCeiling',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud layer ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  stormCloudBase: new Offset({
    value: 0xeac,
    name: 'stormCloudBase',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud layer base - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  stormCloudCoverage: new Offset({
    value: 0xeae,
    name: 'stormCloudCoverage',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud layer coverage - oktas',
    convert: 'Math.round(({VAL} + 1) / 8192)',
    type: Type.UInt16,
    permission: 'r'
  }),
  stormCloudVariation: new Offset({
    value: 0xeb0,
    name: 'stormCloudVariation',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud layer variation - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperTemperatureLevel: new Offset({
    value: 0xeb2,
    name: 'upperTemperatureLevel',
    category: OffsetCategory.WEATHER,
    description: 'upper temperature level - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperTemperature: new Offset({
    value: 0xeb4,
    name: 'upperTemperature',
    category: OffsetCategory.WEATHER,
    description: 'upper temperature - degrees C',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  middleTemperatureLevel: new Offset({
    value: 0xeb6,
    name: 'middleTemperatureLevel',
    category: OffsetCategory.WEATHER,
    description: 'middle temperature level - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  middleTemperature: new Offset({
    value: 0xeb8,
    name: 'middleTemperature',
    category: OffsetCategory.WEATHER,
    description: 'middle temperature - degrees C',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  lowerTemperatureLevel: new Offset({
    value: 0xeba,
    name: 'lowerTemperatureLevel',
    category: OffsetCategory.WEATHER,
    description: 'lower temperature level - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerTemperature: new Offset({
    value: 0xebc,
    name: 'lowerTemperature',
    category: OffsetCategory.WEATHER,
    description: 'lower temperature - degrees C',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  surfaceTemperatureLevel: new Offset({
    value: 0xebe,
    name: 'surfaceTemperatureLevel',
    category: OffsetCategory.WEATHER,
    description: 'surface temperature level - ground elevation - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  surfaceTemperature: new Offset({
    value: 0xec0,
    name: 'surfaceTemperature',
    category: OffsetCategory.WEATHER,
    description: 'surface temperature - degrees C',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  temperatureDrift: new Offset({
    value: 0xec2,
    name: 'temperatureDrift',
    category: OffsetCategory.WEATHER,
    description: 'temperature drift - degrees C',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  temperatureDayNightVariation: new Offset({
    value: 0xec4,
    name: 'temperatureDayNightVariation',
    category: OffsetCategory.WEATHER,
    description: 'temperature day night variation - degrees C',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'r'
  }),
  pressureQNH: new Offset({
    value: 0xec6,
    name: 'pressureQNH',
    category: OffsetCategory.WEATHER,
    description: 'pressure QNH - mb',
    convert: 'Math.round({VAL} / 16)',
    type: Type.UInt16,
    permission: 'r'
  }),
  pressureDrift: new Offset({
    value: 0xec8,
    name: 'pressureDrift',
    category: OffsetCategory.WEATHER,
    description: 'pressure drift - mb',
    convert: 'Math.round({VAL} / 16)',
    type: Type.Int16,
    permission: 'r'
  }),
  upperWindCeiling: new Offset({
    value: 0xeca,
    name: 'upperWindCeiling',
    category: OffsetCategory.WEATHER,
    description: 'upper wind ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperWindBase: new Offset({
    value: 0xecc,
    name: 'upperWindBase',
    category: OffsetCategory.WEATHER,
    description: 'upper wind ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperWindSpeed: new Offset({
    value: 0xece,
    name: 'upperWindSpeed',
    category: OffsetCategory.WEATHER,
    description: 'upper wind ceiling - kt',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperWindDirection: new Offset({
    value: 0xed0,
    name: 'upperWindDirection',
    category: OffsetCategory.WEATHER,
    description: 'upper wind ceiling - TRUE degrees',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperWindTurbulence: new Offset({
    value: 0xed2,
    name: 'upperWindTurbulence',
    category: OffsetCategory.WEATHER,
    description: 'upper wind turbulence - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperWindGustEnabled: new Offset({
    value: 0xed4,
    name: 'upperWindGustEnabled',
    category: OffsetCategory.WEATHER,
    description: 'upper wind gust enabled',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  middleWindCeiling: new Offset({
    value: 0xed6,
    name: 'middleWindCeiling',
    category: OffsetCategory.WEATHER,
    description: 'middle wind ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  middleWindBase: new Offset({
    value: 0xed8,
    name: 'middleWindBase',
    category: OffsetCategory.WEATHER,
    description: 'middle wind ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  middleWindSpeed: new Offset({
    value: 0xeda,
    name: 'middleWindSpeed',
    category: OffsetCategory.WEATHER,
    description: 'middle wind ceiling - kt',
    type: Type.UInt16,
    permission: 'r'
  }),
  middleWindDirection: new Offset({
    value: 0xedc,
    name: 'middleWindDirection',
    category: OffsetCategory.WEATHER,
    description: 'middle wind ceiling - TRUE degrees',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  middleWindTurbulence: new Offset({
    value: 0xede,
    name: 'middleWindTurbulence',
    category: OffsetCategory.WEATHER,
    description: 'middle wind turbulence - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  middleWindGustEnabled: new Offset({
    value: 0xee0,
    name: 'middleWindGustEnabled',
    category: OffsetCategory.WEATHER,
    description: 'middle wind gust enabled',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerWindCeiling: new Offset({
    value: 0xee2,
    name: 'lowerWindCeiling',
    category: OffsetCategory.WEATHER,
    description: 'lower wind ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerWindBase: new Offset({
    value: 0xee4,
    name: 'lowerWindBase',
    category: OffsetCategory.WEATHER,
    description: 'lower wind ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerWindSpeed: new Offset({
    value: 0xee6,
    name: 'lowerWindSpeed',
    category: OffsetCategory.WEATHER,
    description: 'lower wind ceiling - kt',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerWindDirection: new Offset({
    value: 0xee8,
    name: 'lowerWindDirection',
    category: OffsetCategory.WEATHER,
    description: 'lower wind ceiling - TRUE degrees',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerWindTurbulence: new Offset({
    value: 0xeea,
    name: 'lowerWindTurbulence',
    category: OffsetCategory.WEATHER,
    description: 'lower wind turbulence - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerWindGustEnabled: new Offset({
    value: 0xeec,
    name: 'lowerWindGustEnabled',
    category: OffsetCategory.WEATHER,
    description: 'lower wind gust enabled',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'r'
  }),
  surfaceWindCeiling: new Offset({
    value: 0xeee,
    name: 'surfaceWindCeiling',
    category: OffsetCategory.WEATHER,
    description: 'surface wind ceiling - ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'r'
  }),
  surfaceWindTurbulence: new Offset({
    value: 0xef4,
    name: 'surfaceWindTurbulence',
    category: OffsetCategory.WEATHER,
    description: 'surface wind turbulence - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  surfaceWindGustEnabled: new Offset({
    value: 0xef6,
    name: 'surfaceWindGustEnabled',
    category: OffsetCategory.WEATHER,
    description: 'surface wind gust enabled',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperCloudType: new Offset({
    value: 0xef8,
    name: 'upperCloudType',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud type',
    convert: 'cloudType',
    mapping: true,
    type: Type.UInt16,
    permission: 'r'
  }),
  upperCloudIcing: new Offset({
    value: 0xefa,
    name: 'upperCloudIcing',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud icing',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  upperCloudTurbulence: new Offset({
    value: 0xefc,
    name: 'upperCloudTurbulence',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud turbulence - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerCloudType: new Offset({
    value: 0xefe,
    name: 'lowerCloudType',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud type',
    convert: 'cloudType',
    mapping: true,
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerCloudIcing: new Offset({
    value: 0xf00,
    name: 'lowerCloudIcing',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud icing',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  lowerCloudTurbulence: new Offset({
    value: 0xf02,
    name: 'lowerCloudTurbulence',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud turbulence - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  stormCloudType: new Offset({
    value: 0xf04,
    name: 'stormCloudType',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud type',
    convert: 'cloudType',
    mapping: true,
    type: Type.UInt16,
    permission: 'r'
  }),
  stormCloudIcing: new Offset({
    value: 0xf06,
    name: 'stormCloudIcing',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud icing',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  stormCloudTurbulence: new Offset({
    value: 0xf08,
    name: 'stormCloudTurbulence',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud turbulence - 0-255',
    type: Type.UInt16,
    permission: 'r'
  }),
  ambientAirDensity: new Offset({
    value: 0x28c0,
    name: 'ambientAirDensity',
    category: OffsetCategory.WEATHER,
    description: 'ambient air density - slug / sq ft',
    type: Type.Double,
    permission: 'r'
  }),
  ambientAirPressure: new Offset({
    value: 0x28c8,
    name: 'ambientAirPressure',
    category: OffsetCategory.WEATHER,
    description: 'ambient air pressure - lbs / sq ft',
    type: Type.Double,
    permission: 'r'
  }),
  staticAirTemperatureF: new Offset({
    value: 0x28d0,
    name: 'staticAirTemperatureF',
    category: OffsetCategory.WEATHER,
    description: 'static air temperature - F',
    type: Type.Double,
    permission: 'r'
  }),
  staticAirTemperatureR: new Offset({
    value: 0x28d8,
    name: 'staticAirTemperatureR',
    category: OffsetCategory.WEATHER,
    description: 'static air temperature - Rankine degrees',
    type: Type.Double,
    permission: 'r'
  }),
  standardTemperatureRatio: new Offset({
    value: 0x28e0,
    name: 'standardTemperatureRatio',
    category: OffsetCategory.WEATHER,
    description: 'theta - standard temperature ratio',
    type: Type.Double,
    permission: 'r'
  }),
  standardPressureRatio: new Offset({
    value: 0x28e8,
    name: 'standardPressureRatio',
    category: OffsetCategory.WEATHER,
    description: 'delta - standard pressure ratio',
    type: Type.Double,
    permission: 'r'
  }),
  standardDensityRatio: new Offset({
    value: 0x28f0,
    name: 'standardDensityRatio',
    category: OffsetCategory.WEATHER,
    description: 'sigma - standard density ratio',
    type: Type.Double,
    permission: 'r'
  })
};
