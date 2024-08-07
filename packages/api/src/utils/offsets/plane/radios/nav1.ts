import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const NAV1: OffsetList = {
  vor1DMEDistance: new Offset({
    value: 0x300,
    name: 'vor1DMEDistance',
    category: OffsetCategory.RADIOS,
    description: 'VOR1 DME distance - nm',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r'
  }),
  vor1DMESpeed: new Offset({
    value: 0x302,
    name: 'vor1DMESpeed',
    category: OffsetCategory.RADIOS,
    description: 'VOR1 DME speed - kt',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r'
  }),
  vor1DMETimeToStation: new Offset({
    value: 0x304,
    name: 'vor1DMETimeToStation',
    category: OffsetCategory.RADIOS,
    description: 'VOR1 DME time to station - sec',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r'
  }),
  nav1Freq: new Offset({
    value: 0x350,
    name: 'nav1Freq',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 frequency',
    type: Type.UInt16,
    convert: '100 + parseInt(({VAL}).toString(16))/100',
    permission: 'rw'
  }),
  hasNav1: new Offset({
    value: 0x7a0,
    name: 'hasNav1',
    category: OffsetCategory.RADIOS,
    description: 'has NAV1',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  vor1OrILSGlideSlopeLatitude: new Offset({
    value: 0x85c,
    name: 'vor1OrILSGlideSlopeLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 latitude OR NAV1 ILS glideslope latitude',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r'
  }),
  vor1OrILSGlideSlopeLongitude: new Offset({
    value: 0x864,
    name: 'vor1OrILSGlideSlopeLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV 1 ILS glideslope longitude',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r'
  }),
  vor1OrILSGlideSlopeElevation: new Offset({
    value: 0x86c,
    name: 'vor1OrILSGlideSlopeElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV1 ILS glideslope elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  }),
  vor1ILSLocHeadingTrue: new Offset({
    value: 0x870,
    name: 'vor1LocHeadingTrue',
    category: OffsetCategory.RADIOS,
    description:
      'VOR 1 ILS LOC heading - TRUE - -180 different to aircraft direction to follow localiser',
    type: Type.UInt16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r'
  }),
  vor1GlideSlopeAngle: new Offset({
    value: 0x872,
    name: 'vor1GlideSlopeAngle',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 ILS glideslope Angle',
    type: Type.Int16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r'
  }),
  vor1LocLatitude: new Offset({
    value: 0x874,
    name: 'vor1LocLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV1 ILS LOC latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r'
  }),
  vor1LocLongitude: new Offset({
    value: 0x878,
    name: 'vor1LocLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV1 ILS LOC longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r'
  }),
  vor1LocElevation: new Offset({
    value: 0x87c,
    name: 'vor1LocElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV1 ILS LOC elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  }),
  vor1DmeLatitude: new Offset({
    value: 0x880,
    name: 'vor1DmeLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 DME latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r'
  }),
  vor1DmeLongitude: new Offset({
    value: 0x884,
    name: 'vor1DmeLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 DME longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r'
  }),
  vor1DmeElevation: new Offset({
    value: 0x88a,
    name: 'vor1DmeElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 DME elevation - ft - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r'
  }),
  dme1Distance: new Offset({
    value: 0xc29,
    name: 'dme1Distance',
    category: OffsetCategory.RADIOS,
    description: 'DME1 distance - nm',
    convert: '+{VAL}',
    type: Type.String,
    length: 5,
    permission: 'r'
  }),
  dme1Speed: new Offset({
    value: 0xc2e,
    name: 'dme1Speed',
    category: OffsetCategory.RADIOS,
    description: 'DME1 speed - kt',
    convert: '+{VAL}',
    type: Type.String,
    length: 5,
    permission: 'r'
  }),
  nav1MagVar: new Offset({
    value: 0xc40,
    name: 'nav1MagVar',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 mag var',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.Int16,
    permission: 'r'
  }),
  nav1LocNeedlePosition: new Offset({
    value: 0xc48,
    name: 'nav1LocNeedlePosition',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 loc needle position - percent - -ve left +ve right',
    convert: 'Math.round({VAL} / 127 * 100)',
    type: Type.SByte,
    permission: 'r'
  }),
  nav1GlideslopeNeedlePosition: new Offset({
    value: 0xc49,
    name: 'nav1GlideslopeNeedlePosition',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 glideslope needle position - percent - -ve up +ve down',
    convert: 'Math.round({VAL} / 127 * 100)',
    type: Type.SByte,
    permission: 'r'
  }),
  nav1BackCourseFlags: new Offset({
    value: 0xc4a,
    name: 'nav1BackCourseFlags',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 glideslope flags',
    convert: 'navBackCourseFlags',
    mapping: true,
    type: Type.ByteArray,
    length: 8,
    permission: 'r'
  }),
  nav1ToFrom: new Offset({
    value: 0xc4b,
    name: 'nav1ToFrom',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 TO/FROM flag - values: off/to/from',
    convert: 'vorToFrom',
    mapping: true,
    type: Type.Byte,
    permission: 'r'
  }),
  nav1GlideslopeActive: new Offset({
    value: 0xc4c,
    name: 'nav1GlideslopeActive',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 glideslope flag',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  nav1Capabilities: new Offset({
    value: 0xc4d,
    name: 'nav1Capabilities',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 capabilities',
    convert: 'navCapabilities',
    mapping: true,
    type: Type.ByteArray,
    length: 8,
    permission: 'r'
  }),
  nav1Obs: new Offset({
    value: 0xc4e,
    name: 'nav1Obs',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 obs setting - degrees',
    type: Type.Int16,
    permission: 'rw'
  }),
  nav1Radial: new Offset({
    value: 0xc50,
    name: 'nav1Radial',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 radial - degrees - MAG for VOR, TRUE for ILS LOC',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.UInt16,
    permission: 'r'
  }),
  nav1SignalStrength: new Offset({
    value: 0xc52,
    name: 'nav1SignalStrength',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 signal strength',
    type: Type.UInt32,
    permission: 'r'
  }),
  nav1BearingToVOR: new Offset({
    value: 0xc56,
    name: 'nav1BearingToVOR',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 relative bearing to VOR - degrees',
    type: Type.UInt16,
    permission: 'r'
  })
};
