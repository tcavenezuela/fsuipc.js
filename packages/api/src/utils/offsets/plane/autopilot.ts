import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const autopilot: OffsetList = {
  autoPilotAvailable: new Offset({
    value: 0x764,
    name: 'autoPilotAvailable',
    category: OffsetCategory.AUTOPILOT,
    description: 'autopilot available',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r'
  }),
  flyByWireELACSwitch: new Offset({
    value: 0x7b6,
    name: 'flyByWireELACSwitch',
    category: OffsetCategory.AUTOPILOT,
    description: 'fly by wire ELAC switch',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  flyByWireELACCompFailFlag: new Offset({
    value: 0x7b7,
    name: 'flyByWireELACCompFailFlag',
    category: OffsetCategory.AUTOPILOT,
    description: 'fly by wire ELAC comp fail flag (read only)',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  flyByWireFACSwitch: new Offset({
    value: 0x7b8,
    name: 'flyByWireFACSwitch',
    category: OffsetCategory.AUTOPILOT,
    description: 'fly by wire FAC switch',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  flyByWireFACCompFailFlag: new Offset({
    value: 0x7b9,
    name: 'flyByWireFACCompFailFlag',
    category: OffsetCategory.AUTOPILOT,
    description: 'fly by wire FAC comp fail flag (read only)',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  flyByWireSECSwitch: new Offset({
    value: 0x7ba,
    name: 'flyByWireSECSwitch',
    category: OffsetCategory.AUTOPILOT,
    description: 'fly by wire SEC switch',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  flyByWireSECCompFailFlag: new Offset({
    value: 0x7bb,
    name: 'flyByWireSECCompFailFlag',
    category: OffsetCategory.AUTOPILOT,
    description: 'fly by wire SEC comp fail flag (read only)',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  apMasterSwitch: new Offset({
    value: 0x7bc,
    name: 'apMasterSwitch',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP master switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apWingLevel: new Offset({
    value: 0x7c0,
    name: 'apWingLevel',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP wing level',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apNav1Hold: new Offset({
    value: 0x7c4,
    name: 'apNav1Hold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP NAV1 hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apHeadingHold: new Offset({
    value: 0x7c8,
    name: 'apHeadingHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP heading hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apHeadingValue: new Offset({
    value: 0x7cc,
    name: 'apHeadingValue',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP heading value - degrees',
    convert: 'Math.round(({VAL} * 360) / 65536)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  apAltitudeHold: new Offset({
    value: 0x7d0,
    name: 'apAltitudeHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP altitude hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apAltitudeValue: new Offset({
    value: 0x7d4,
    name: 'apAltitudeValue',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP altitude value - ft',
    convert: '+({VAL} * 3.28084 / 65536).toFixed(2)',
    type: Type.Int32,
    permission: 'rw'
  }),
  apAttitudeHold: new Offset({
    value: 0x7d8,
    name: 'apAttitudeHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP attitude hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apAsHold: new Offset({
    value: 0x7dc,
    name: 'apAsHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP airspeed hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apAsValue: new Offset({
    value: 0x7e2,
    name: 'apAsValue',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP airspeed value - kt',
    type: Type.UInt16,
    permission: 'rw'
  }),
  apMachHold: new Offset({
    value: 0x7e4,
    name: 'apMachHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP mach hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apMachValue: new Offset({
    value: 0x7e8,
    name: 'apMachValue',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP mach value - mach',
    convert: '{VAL} / 65536',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apVsHold: new Offset({
    value: 0x7ec,
    name: 'apVsHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP vertical speed hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apVsValue: new Offset({
    value: 0x7f2,
    name: 'apVsValue',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP vertical speed value - ft/min',
    type: Type.Int16,
    permission: 'rw'
  }),
  apRPMN1Hold: new Offset({
    value: 0x7f4,
    name: 'apRPMN1Hold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP RPM/N1 hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apRPMN1Value: new Offset({
    value: 0x7fa,
    name: 'apRPMN1Value',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP RPM/N1 value - percent',
    convert: 'Math.round({VAL} * 100 / 16384)',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apGlideSlopeHold: new Offset({
    value: 0x7fc,
    name: 'apGlideSlopeHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP GlideSlope hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apApproachHold: new Offset({
    value: 0x800,
    name: 'apApproachHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP Approach hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apBackCourseHold: new Offset({
    value: 0x804,
    name: 'apBackCourseHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP back course hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apYawDamperHold: new Offset({
    value: 0x808,
    name: 'apYawDamperHold',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP yaw damper hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apTOGAAutoThrottle: new Offset({
    value: 0x80c,
    name: 'apTOGAAutoThrottle',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP TO/GA throttle hold',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  apAutoThrottleArm: new Offset({
    value: 0x810,
    name: 'apAutoThrottleArm',
    category: OffsetCategory.AUTOPILOT,
    description: 'AP autothrottle arm',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  })
};
