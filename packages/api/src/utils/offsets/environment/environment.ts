import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const environment: OffsetList = {
  clockHour: new Offset({
    value: 0x238,
    name: 'clockHour',
    category: OffsetCategory.ENVIRONMENT,
    description: '0-23',
    type: Type.Byte,
    permission: 'rw'
  }),
  clockMin: new Offset({
    value: 0x239,
    name: 'clockMin',
    category: OffsetCategory.ENVIRONMENT,
    description: '0-59',
    type: Type.Byte,
    permission: 'rw'
  }),
  clockSec: new Offset({
    value: 0x23a,
    name: 'clockSec',
    category: OffsetCategory.ENVIRONMENT,
    description: '0-59',
    type: Type.Byte,
    permission: 'rw'
  }),
  zuluHour: new Offset({
    value: 0x23b,
    name: 'zuluHour',
    category: OffsetCategory.ENVIRONMENT,
    description: '0-23 UTC',
    type: Type.Byte,
    permission: 'rw'
  }),
  zuluMin: new Offset({
    value: 0x23c,
    name: 'zuluMin',
    category: OffsetCategory.ENVIRONMENT,
    description: '0-59 UTC',
    type: Type.Byte,
    permission: 'rw'
  }),
  zuluDayOfMonth: new Offset({
    value: 0x23d,
    name: 'zuluDayOfMonth',
    category: OffsetCategory.ENVIRONMENT,
    description: 'day of month UTC - FSX only - count from 1',
    type: Type.Byte,
    permission: 'r'
  }),
  dayOfYear: new Offset({
    value: 0x23e,
    name: 'dayOfYear',
    category: OffsetCategory.ENVIRONMENT,
    description: 'day of year - count from 1',
    type: Type.UInt16,
    permission: 'rw'
  }),
  zuluYear: new Offset({
    value: 0x240,
    name: 'zuluYear',
    category: OffsetCategory.ENVIRONMENT,
    description: 'year UTC',
    type: Type.UInt16,
    permission: 'rw'
  }),
  zuluMonthOfYear: new Offset({
    value: 0x242,
    name: 'zuluMonthOfYear',
    category: OffsetCategory.ENVIRONMENT,
    description: 'month of year UTC - FSX only',
    type: Type.Byte,
    permission: 'r'
  }),
  zuluDayOfWeek: new Offset({
    value: 0x243,
    name: 'zuluDayOfWeek',
    category: OffsetCategory.ENVIRONMENT,
    description: 'day of week UTC - FSX only',
    type: Type.Byte,
    permission: 'r'
  }),
  localMonthOfYear: new Offset({
    value: 0x244,
    name: 'localMonthOfYear',
    category: OffsetCategory.ENVIRONMENT,
    description: 'local month of year - FSX only',
    type: Type.Byte,
    permission: 'r'
  }),
  localDayOfMonth: new Offset({
    value: 0x245,
    name: 'localDayOfMonth',
    category: OffsetCategory.ENVIRONMENT,
    description: 'local day of month - FSX only',
    type: Type.Byte,
    permission: 'r'
  }),
  timezoneOffsetToZulu: new Offset({
    value: 0x246,
    name: 'timezoneOffsetToZulu',
    category: OffsetCategory.ENVIRONMENT,
    description:
      'timezone offset minutes to zulu - determines aircraft position (+ve = behind zulu, -ve = ahead zulu)',
    type: Type.Int16,
    permission: 'rw'
  }),
  season: new Offset({
    value: 0x248,
    name: 'season',
    category: OffsetCategory.ENVIRONMENT,
    description: 'local season',
    convert: 'seasons',
    mapping: true,
    type: Type.UInt16,
    permission: 'rw'
  }),
  localYear: new Offset({
    value: 0x24a,
    name: 'localYear',
    category: OffsetCategory.ENVIRONMENT,
    description: 'local year',
    type: Type.UInt16,
    permission: 'rw'
  }),
  nearestAirportId: new Offset({
    value: 0x658,
    name: 'nearestAirportId',
    category: OffsetCategory.ENVIRONMENT,
    description: 'nearest airport',
    type: Type.ByteArray,
    length: 128,
    convert: 'nearestAirportsIds',
    mapping: true,
    permission: 'r'
  }),
  nearestAirportLatitude: new Offset({
    value: 0x65c,
    name: 'nearestAirportLatitude',
    category: OffsetCategory.ENVIRONMENT,
    description: 'nearest airport latitude',
    type: Type.Single,
    permission: 'r'
  }),
  nearestAirportLongitude: new Offset({
    value: 0x660,
    name: 'nearestAirportLongitude',
    category: OffsetCategory.ENVIRONMENT,
    description: 'nearest airport longitude',
    type: Type.Single,
    permission: 'r'
  }),
  nearestAirportAltitude: new Offset({
    value: 0x664,
    name: 'nearestAirportAltitude',
    category: OffsetCategory.ENVIRONMENT,
    description: 'nearest airport altitude - ft',
    type: Type.Single,
    permission: 'r'
  }),
  nearestAirportDistance: new Offset({
    value: 0x668,
    name: 'nearestAirportDistance',
    category: OffsetCategory.ENVIRONMENT,
    description: 'nearest airport distance - NM',
    type: Type.Single,
    permission: 'r'
  }),
  towerLatitude: new Offset({
    value: 0xd50,
    name: 'towerLatitude',
    category: OffsetCategory.ENVIRONMENT,
    description: 'tower latitude',
    convert: '{VAL} * 90 / (10001750 * 65536 * 65536)',
    type: Type.Int64,
    permission: 'r'
  }),
  towerLongitude: new Offset({
    value: 0xd58,
    name: 'towerLongitude',
    category: OffsetCategory.ENVIRONMENT,
    description: 'tower longitude',
    convert: '{VAL} * 360 / (65536 * 65536 * 65536 * 65536)',
    type: Type.Int64,
    permission: 'r'
  }),
  towerAltitude: new Offset({
    value: 0xd60,
    name: 'towerAltitude',
    category: OffsetCategory.ENVIRONMENT,
    description: 'tower altitude',
    convert: '+({VAL} * 3.28084 / (65536 * 65536)).toFixed(2)',
    type: Type.Int64,
    permission: 'r'
  }),
  nearestWeatherStationId: new Offset({
    value: 0xe80,
    name: 'nearestWeatherStationId',
    category: OffsetCategory.ENVIRONMENT,
    description: 'nearest weather station ICAO id',
    type: Type.String,
    length: 4,
    permission: 'r'
  }),
  timeOfDay: new Offset({
    value: 0x115e,
    name: 'timeOfDay',
    category: OffsetCategory.ENVIRONMENT,
    description: 'time of day',
    type: Type.Byte,
    permission: 'r'
  })
};
