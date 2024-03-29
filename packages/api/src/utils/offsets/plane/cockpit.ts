import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const cockpit: OffsetList = {
  navLights: new Offset({
    value: 0x280,
    name: 'navLights',
    category: OffsetCategory.COCKPIT,
    description: 'nav lights',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  strobeLights: new Offset({
    value: 0x281,
    name: 'strobeLights',
    category: OffsetCategory.COCKPIT,
    description: 'strobe lights',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  landingLights: new Offset({
    value: 0x28c,
    name: 'landingLights',
    category: OffsetCategory.COCKPIT,
    description: 'landing lights',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lights: new Offset({
    value: 0x0d0c,
    name: 'lights',
    category: OffsetCategory.COCKPIT,
    description: 'all lights - FS2000+',
    type: Type.BitArray,
    convert: 'lightsMapping',
    mapping: true,
    length: 2,
    permission: 'rw'
  }),
  alternateStaticAirSource: new Offset({
    value: 0x29b,
    name: 'alternateStaticAirSource',
    category: OffsetCategory.COCKPIT,
    description: 'Alternate static air source selected',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  pitotHeat: new Offset({
    value: 0x29c,
    name: 'pitotHeat',
    category: OffsetCategory.COCKPIT,
    description: 'pitot heat active',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'rw'
  }),
  altimeterSettings: new Offset({
    value: 0x330,
    name: 'altimeterSettings',
    category: OffsetCategory.COCKPIT,
    description: 'altimeters settings - mb',
    convert: '{VAL} / 16',
    type: Type.UInt16,
    permission: 'rw'
  }),
  altimeterSettingsG1000: new Offset({
    value: 0x332,
    name: 'altimeterSettingsG1000',
    category: OffsetCategory.COCKPIT,
    description: 'G1000 altimeters settings - mb',
    convert: '{VAL} / 16',
    type: Type.UInt16,
    permission: 'rw'
  }),
  turnCoordinatorPosition: new Offset({
    value: 0x36e,
    name: 'turnCoordinatorPosition',
    category: OffsetCategory.COCKPIT,
    description: 'Turn coordinator ball position - + to the right, - to the left, 0 balanced',
    type: Type.SByte,
    permission: 'r'
  }),
  turnRate: new Offset({
    value: 0x37c,
    name: 'turnRate',
    category: OffsetCategory.COCKPIT,
    description: 'Turn rate needle - minutes (- to the left, + to the right)',
    type: Type.Int16,
    convert: 'Math.round({VAL} / 1024)',
    permission: 'r'
  }),
  preciseTurnCoordinatorPosition: new Offset({
    value: 0x380,
    name: 'preciseTurnCoordinatorPosition',
    category: OffsetCategory.COCKPIT,
    description: 'Turn coordinator ball position - + to the right, - to the left, 0 balanced',
    type: Type.Single,
    permission: 'r'
  }),
  preciseTurnRate: new Offset({
    value: 0x384,
    name: 'preciseTurnRate',
    category: OffsetCategory.COCKPIT,
    description: 'Turn rate needle - minutes (- to the left, + to the right)',
    type: Type.Single,
    permission: 'r'
  }),
  stallWarning: new Offset({
    value: 0x36c,
    name: 'stallWarning',
    category: OffsetCategory.COCKPIT,
    description: 'stall warning',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  overspeedWarning: new Offset({
    value: 0x36d,
    name: 'overspeedWarning',
    category: OffsetCategory.COCKPIT,
    description: 'overspeed warning',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  displayIAS: new Offset({
    value: 0x612,
    name: 'displayIAS',
    category: OffsetCategory.COCKPIT,
    description: 'display IAS - <= FS2000',
    type: Type.UInt16,
    permission: 'rw'
  }),
  suctionPressure: new Offset({
    value: 0xb18,
    name: 'suctionPressure',
    category: OffsetCategory.COCKPIT,
    description: 'gyro suction - inHg',
    type: Type.Double,
    permission: 'r'
  }),
  bleedAirSourceControl: new Offset({
    value: 0xb50,
    name: 'bleedAirSourceControl',
    category: OffsetCategory.COCKPIT,
    description:
      '0=Min, 1=auto, 2=Off, 3=APU, 4=Engines - FSX A321: 0=Auto, 1=Shut (off), 2=APU, 3=Engines',
    type: Type.Byte,
    permission: 'rw'
  }),
  gyroDrift: new Offset({
    value: 0xc3e,
    name: 'gyroDrift',
    category: OffsetCategory.COCKPIT,
    description: 'gyro drift - degrees',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.Int16,
    permission: 'rw'
  }),
  NDScale738A321EFIS: new Offset({
    value: 0xe00,
    name: 'NDScale738A321EFIS',
    category: OffsetCategory.COCKPIT,
    description:
      'Default 738 and A321 EFIS: ND scale: 738: 0=5nm up to 7=640nm - A321: 0=10nm up to 5=320nm',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDMode738EFIS: new Offset({
    value: 0xe02,
    name: 'NDMode738EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default 738 EFIS: ND mode:0=APP, 1=VOR, 2=MAP',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDMapItems738A321EFIS: new Offset({
    value: 0xe04,
    name: 'NDMapItems738A321EFIS',
    category: OffsetCategory.COCKPIT,
    description:
      'Default 738 and A321 EFIS: ND map items shown: 738: 0=WPT, 1=APT, 2=NDB, 3=VOR - A321: 0=WPT, 1=VOR, 2=NDB, 3=APT',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDVORADF1Switch738EFIS: new Offset({
    value: 0xe06,
    name: 'NDVORADF1Switch738EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default 738 EFIS: ND VOR/ADF1 switch: 0=VOR, 1=OFF, 2=ADF',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDVORADF2Switch738EFIS: new Offset({
    value: 0xe08,
    name: 'NDVORADF2Switch738EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default 738 EFIS: ND VOR/ADF2 switch: 0=VOR, 1=OFF, 2=ADF',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDArcCentered738EFIS: new Offset({
    value: 0xe0a,
    name: 'NDArcCentered738EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default 738 EFIS: ND arc=0, centred=1',
    type: Type.UInt16,
    permission: 'rw'
  }),
  autopilotSpeedSwitch738EFIS: new Offset({
    value: 0xe0c,
    name: 'autopilotSpeedSwitch738EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default 738 EFIS: AP speed/mach C/O button (pressed if 1, not pressed if 0). ',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  NDModeA321EFIS: new Offset({
    value: 0xe0e,
    name: 'NDModeA321EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default A321 EFIS: ND mode: 0=ILS, 1=VOR, 2=NAV, 3=ARC',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDVORADF1SwitchA321EFIS: new Offset({
    value: 0xe10,
    name: 'NDVORADF1SwitchA321EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default A321 EFIS: ND VOR/ADF1 switch: 0=VOR, 1=OFF, 2=ADF',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDVORADF2SwitchA321EFIS: new Offset({
    value: 0xe12,
    name: 'NDVORADF2SwitchA321EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default A321 EFIS: ND VOR/ADF2 switch: 0=VOR, 1=OFF, 2=ADF',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDInHghPASwitchA321EFIS: new Offset({
    value: 0xe14,
    name: 'NDInHghPASwitchA321EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default A321 EFIS: ND InHg/hPA switch, 0=InHg, 1=hPA',
    type: Type.UInt16,
    permission: 'rw'
  }),
  NDILSSwitchA321EFIS: new Offset({
    value: 0xe16,
    name: 'NDILSSwitchA321EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default A321 EFIS: ND ILS mode button, 0 = off, 1=on',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  autopilotSpeedSwitch321EFIS: new Offset({
    value: 0xe18,
    name: 'autopilotSpeedSwitch321EFIS',
    category: OffsetCategory.COCKPIT,
    description: 'Default 321 EFIS: AP speed/mach C/O button (pressed if 1, not pressed if 0). ',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  altitudeChangeRate321EFIS: new Offset({
    value: 0xe1a,
    name: 'altitudeChangeRate',
    category: OffsetCategory.COCKPIT,
    description: 'Default A321 EFIS: Altitude change rate switch (0 = 100, 1=1000)',
    convert: '{VAL} === 0 ? 100 : 1000',
    type: Type.UInt16,
    permission: 'r'
  }),
  fuelFlowAtCruise: new Offset({
    value: 0x1270,
    name: 'fuelFlowAtCruise',
    category: OffsetCategory.COCKPIT,
    description: 'Estimated fuel flow at cruise - lb/h',
    type: Type.Int32,
    permission: 'r'
  })
};
