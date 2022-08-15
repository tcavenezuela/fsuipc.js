import { Type } from 'fsuipc.js';

import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

export const weatherSettings: OffsetList = {
  upperCloudCeilingSetting: new Offset({
    value: 0xf1c,
    name: 'upperCloudCeilingSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud layer ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperCloudBaseSetting: new Offset({
    value: 0xf1e,
    name: 'upperCloudBaseSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud layer base - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperCloudCoverageSetting: new Offset({
    value: 0xf20,
    name: 'upperCloudCoverageSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud layer coverage - oktas - setting',
    convert: 'Math.round(({VAL} + 1) / 8192)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperCloudVariationSetting: new Offset({
    value: 0xf22,
    name: 'upperCloudVariationSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud layer variation - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerCloudCeilingSetting: new Offset({
    value: 0xf24,
    name: 'lowerCloudCeilingSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud layer ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerCloudBaseSetting: new Offset({
    value: 0xf26,
    name: 'lowerCloudBaseSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud layer base - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerCloudCoverageSetting: new Offset({
    value: 0xf28,
    name: 'lowerCloudCoverageSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud layer coverage - oktas - setting',
    convert: 'Math.round(({VAL} + 1) / 8192)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerCloudVariationSetting: new Offset({
    value: 0xf2a,
    name: 'lowerCloudVariationSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud layer variation - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  stormCloudCeilingSetting: new Offset({
    value: 0xf2c,
    name: 'stormCloudCeilingSetting',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud layer ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  stormCloudBaseSetting: new Offset({
    value: 0xf2e,
    name: 'stormCloudBaseSetting',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud layer base - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  stormCloudCoverageSetting: new Offset({
    value: 0xf30,
    name: 'stormCloudCoverageSetting',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud layer coverage - oktas - setting',
    convert: 'Math.round(({VAL} + 1) / 8192)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  stormCloudVariationSetting: new Offset({
    value: 0xf32,
    name: 'stormCloudVariationSetting',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud layer variation - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperTemperatureLevelSetting: new Offset({
    value: 0xf34,
    name: 'upperTemperatureLevelSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper temperature level - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperTemperatureSetting: new Offset({
    value: 0xf36,
    name: 'upperTemperatureSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper temperature - degrees C - setting',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'rw'
  }),
  middleTemperatureLevelSetting: new Offset({
    value: 0xf38,
    name: 'middleTemperatureLevelSetting',
    category: OffsetCategory.WEATHER,
    description: 'middle temperature level - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  middleTemperatureSetting: new Offset({
    value: 0xf3a,
    name: 'middleTemperatureSetting',
    category: OffsetCategory.WEATHER,
    description: 'middle temperature - degrees C - setting',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'rw'
  }),
  lowerTemperatureLevelSetting: new Offset({
    value: 0xf3c,
    name: 'lowerTemperatureLevelSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower temperature level - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerTemperatureSetting: new Offset({
    value: 0xf3e,
    name: 'lowerTemperatureSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower temperature - degrees C - setting',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'rw'
  }),
  surfaceTemperatureLevelSetting: new Offset({
    value: 0xf40,
    name: 'surfaceTemperatureLevelSetting',
    category: OffsetCategory.WEATHER,
    description: 'surface temperature level - ground elevation  - setting- ft',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  surfaceTemperatureSetting: new Offset({
    value: 0xf42,
    name: 'surfaceTemperatureSetting',
    category: OffsetCategory.WEATHER,
    description: 'surface temperature - degrees C - setting',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'rw'
  }),
  temperatureDriftSetting: new Offset({
    value: 0xf44,
    name: 'temperatureDriftSetting',
    category: OffsetCategory.WEATHER,
    description: 'temperature drift - degrees C - setting',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'rw'
  }),
  temperatureDayNightVariationSetting: new Offset({
    value: 0xf46,
    name: 'temperatureDayNightVariationSetting',
    category: OffsetCategory.WEATHER,
    description: 'temperature day night variation - degrees C - setting',
    convert: 'Math.round({VAL} / 256)',
    type: Type.Int16,
    permission: 'rw'
  }),
  pressureQNHSetting: new Offset({
    value: 0xf48,
    name: 'pressureQNHSetting',
    category: OffsetCategory.WEATHER,
    description: 'pressure QNH - mb - setting',
    convert: 'Math.round({VAL} / 16)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  pressureDriftSetting: new Offset({
    value: 0xf4a,
    name: 'pressureDriftSetting',
    category: OffsetCategory.WEATHER,
    description: 'pressure drift - mb - setting',
    convert: 'Math.round({VAL} / 16)',
    type: Type.Int16,
    permission: 'rw'
  }),
  upperWindCeilingSetting: new Offset({
    value: 0xf4c,
    name: 'upperWindCeilingSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper wind ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperWindBaseSetting: new Offset({
    value: 0xf4e,
    name: 'upperWindBaseSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper wind ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperWindSpeedSetting: new Offset({
    value: 0xf50,
    name: 'upperWindSpeedSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper wind ceiling - kt - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperWindDirectionSetting: new Offset({
    value: 0xf52,
    name: 'upperWindDirectionSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper wind ceiling - TRUE degrees - setting',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperWindTurbulenceSetting: new Offset({
    value: 0xf54,
    name: 'upperWindTurbulenceSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper wind turbulence - 0-255 - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperWindGustEnabledSetting: new Offset({
    value: 0xf56,
    name: 'upperWindGustEnabledSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper wind gust enabled - setting',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  middleWindCeilingSetting: new Offset({
    value: 0xf58,
    name: 'middleWindCeilingSetting',
    category: OffsetCategory.WEATHER,
    description: 'middle wind ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  middleWindBaseSetting: new Offset({
    value: 0xf5a,
    name: 'middleWindBaseSetting',
    category: OffsetCategory.WEATHER,
    description: 'middle wind ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  middleWindSpeedSetting: new Offset({
    value: 0xf5c,
    name: 'middleWindSpeedSetting',
    category: OffsetCategory.WEATHER,
    description: 'middle wind ceiling - kt - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  middleWindDirectionSetting: new Offset({
    value: 0xf5e,
    name: 'middleWindDirectionSetting',
    category: OffsetCategory.WEATHER,
    description: 'middle wind ceiling - TRUE degrees - setting',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  middleWindTurbulenceSetting: new Offset({
    value: 0xf60,
    name: 'middleWindTurbulenceSetting',
    category: OffsetCategory.WEATHER,
    description: 'middle wind turbulence - 0-255 - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  middleWindGustEnabledSetting: new Offset({
    value: 0xf62,
    name: 'middleWindGustEnabledSetting',
    category: OffsetCategory.WEATHER,
    description: 'middle wind gust enabled - setting',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerWindCeilingSetting: new Offset({
    value: 0xf64,
    name: 'lowerWindCeilingSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower wind ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerWindBaseSetting: new Offset({
    value: 0xf66,
    name: 'lowerWindBaseSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower wind ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerWindSpeedSetting: new Offset({
    value: 0xf68,
    name: 'lowerWindSpeedSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower wind ceiling - kt - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerWindDirectionSetting: new Offset({
    value: 0xf6a,
    name: 'lowerWindDirectionSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower wind ceiling - TRUE degrees - setting',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerWindTurbulenceSetting: new Offset({
    value: 0xf6c,
    name: 'lowerWindTurbulenceSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower wind turbulence - 0-255 - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerWindGustEnabledSetting: new Offset({
    value: 0xf6e,
    name: 'lowerWindGustEnabledSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower wind gust enabled - setting',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'rw'
  }),
  surfaceWindCeilingSetting: new Offset({
    value: 0xf70,
    name: 'surfaceWindCeilingSetting',
    category: OffsetCategory.WEATHER,
    description: 'surface wind ceiling - ft - setting',
    convert: '+({VAL} * 3.28084).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  surfaceWindSpeedSetting: new Offset({
    value: 0xf72,
    name: 'surfaceWindSpeedSetting',
    category: OffsetCategory.WEATHER,
    description: 'surface wind speed - kt - settings',
    type: Type.UInt16,
    permission: 'rw'
  }),
  surfaceWindDirectionSetting: new Offset({
    value: 0xf74,
    name: 'surfaceWindSpeedSetting',
    category: OffsetCategory.WEATHER,
    description: 'surface wind direction - MAG degrees - settings',
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  surfaceWindTurbulenceSetting: new Offset({
    value: 0xf76,
    name: 'surfaceWindTurbulenceSetting',
    category: OffsetCategory.WEATHER,
    description: 'surface wind turbulence - 0-255 - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  surfaceWindGustEnabledSetting: new Offset({
    value: 0xf78,
    name: 'surfaceWindGustEnabledSetting',
    category: OffsetCategory.WEATHER,
    description: 'surface wind gust enabled - setting',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperCloudTypeSetting: new Offset({
    value: 0xf7a,
    name: 'upperCloudTypeSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud type - setting',
    convert: 'cloudType',
    mapping: true,
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperCloudIcingSetting: new Offset({
    value: 0xf7c,
    name: 'upperCloudIcingSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud icing - setting',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  upperCloudTurbulenceSetting: new Offset({
    value: 0xf7e,
    name: 'upperCloudTurbulenceSetting',
    category: OffsetCategory.WEATHER,
    description: 'upper cloud turbulence - 0-255 - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerCloudTypeSetting: new Offset({
    value: 0xf80,
    name: 'lowerCloudTypeSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud type - setting',
    convert: 'cloudType',
    mapping: true,
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerCloudIcingSetting: new Offset({
    value: 0xf82,
    name: 'lowerCloudIcingSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud icing - setting',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lowerCloudTurbulenceSetting: new Offset({
    value: 0xf84,
    name: 'lowerCloudTurbulenceSetting',
    category: OffsetCategory.WEATHER,
    description: 'lower cloud turbulence - 0-255 - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  stormCloudTypeSetting: new Offset({
    value: 0xf86,
    name: 'stormCloudTypeSetting',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud type - setting',
    convert: 'cloudType',
    mapping: true,
    type: Type.UInt16,
    permission: 'rw'
  }),
  stormCloudIcingSetting: new Offset({
    value: 0xf88,
    name: 'stormCloudIcingSetting',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud icing - setting',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  stormCloudTurbulenceSetting: new Offset({
    value: 0xf8a,
    name: 'stormCloudTurbulenceSetting',
    category: OffsetCategory.WEATHER,
    description: 'storm cloud turbulence - 0-255 - setting',
    type: Type.UInt16,
    permission: 'rw'
  }),
  visibilitySetting: new Offset({
    value: 0xf8c,
    name: 'visibilitySetting',
    category: OffsetCategory.WEATHER,
    description: 'visibility setting - sm',
    convert: '{VAL} / 100',
    type: Type.UInt16,
    permission: 'rw'
  })
};
