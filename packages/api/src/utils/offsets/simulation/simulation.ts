import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const simulation: OffsetList = {
  startupFlight: new Offset({
    value: 0x24,
    name: 'startupFlight',
    category: OffsetCategory.SIMULATION,
    description: 'startup path',
    type: Type.String,
    length: 256,
    permission: 'r'
  }),
  logbookName: new Offset({
    value: 0x12c,
    name: 'logbookName',
    category: OffsetCategory.SIMULATION,
    description: 'logbook name - FS2002+',
    type: Type.String,
    length: 256,
    permission: 'r'
  }),
  flightPlan: new Offset({
    value: 0x130,
    name: 'flightPlan',
    category: OffsetCategory.SIMULATION,
    description: 'current flight plan - FSX only',
    type: Type.String,
    length: 256,
    permission: 'r'
  }),
  availableMemory: new Offset({
    value: 0x24c,
    name: 'availableMemory',
    category: OffsetCategory.SIMULATION,
    description: 'available FS memory - kb',
    type: Type.Int32,
    permission: 'r'
  }),
  trafficDensityAirline: new Offset({
    value: 0x250,
    name: 'trafficDensityAirline',
    category: OffsetCategory.SIMULATION,
    description: 'Airline traffic density percent',
    type: Type.Byte,
    permission: 'rw'
  }),
  trafficDensityGA: new Offset({
    value: 0x251,
    name: 'trafficDensityGA',
    category: OffsetCategory.SIMULATION,
    description: 'General Aviation traffic density percent',
    type: Type.Byte,
    permission: 'rw'
  }),
  trafficDensityShips: new Offset({
    value: 0x252,
    name: 'trafficDensityShips',
    category: OffsetCategory.SIMULATION,
    description: 'Ships and Ferries traffic density percent',
    type: Type.Byte,
    permission: 'rw'
  }),
  cloudCoverDensity: new Offset({
    value: 0x254,
    name: 'cloudCoverDensity',
    category: OffsetCategory.SIMULATION,
    description: 'cloud cover density - 5-8',
    type: Type.Byte,
    permission: 'rw'
  }),
  cloudComplex: new Offset({
    value: 0x255,
    name: 'cloudComplex',
    category: OffsetCategory.SIMULATION,
    description: 'cloud simple/complex - 0 = simple, 1 = complex',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  thermalVisualisation: new Offset({
    value: 0x256,
    name: 'thermalVisualisation',
    category: OffsetCategory.SIMULATION,
    description: '0 = none, 1 = natural, 2 = schematic',
    type: Type.Byte,
    permission: 'r'
  }),
  memoryAssignedToFSUIPC: new Offset({
    value: 0x258,
    name: 'memoryAssignedToFSUIPC',
    category: OffsetCategory.SIMULATION,
    type: Type.Int16,
    permission: 'r'
  }),
  pauseControl: new Offset({
    value: 0x262,
    name: 'pauseControl',
    category: OffsetCategory.SIMULATION,
    description: 'pause control (write only)',
    convert: '{VAL} ? 1 : 0',
    type: Type.UInt16,
    permission: 'w'
  }),
  pauseFlag: new Offset({
    value: 0x264,
    name: 'pauseFlag',
    category: OffsetCategory.SIMULATION,
    description: 'simulation paused',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'r'
  }),
  framerate: new Offset({
    value: 0x274,
    name: 'framerate',
    category: OffsetCategory.SIMULATION,
    description: 'framerate',
    convert: 'Math.floor(32768/{VAL})',
    type: Type.UInt16,
    permission: 'r'
  }),
  zoomfactor: new Offset({
    value: 0x2b2,
    name: 'zoomfactor',
    category: OffsetCategory.SIMULATION,
    description: 'zoom factor - FS2002+',
    convert: 'Math.floor({VAL}/64)',
    type: Type.UInt16,
    permission: 'r'
  }),
  controlTimer1: new Offset({
    value: 0x310,
    name: 'controlTimer1',
    category: OffsetCategory.SIMULATION,
    description: 'control timer 1 - FS2002+ - Seconds',
    type: Type.Double,
    permission: 'r'
  }),
  controlTimer2: new Offset({
    value: 0x368,
    name: 'controlTimer2',
    category: OffsetCategory.SIMULATION,
    description: 'control timer 2 - FS2002+',
    type: Type.Int32,
    permission: 'r'
  }),
  fuelBoxFlag: new Offset({
    value: 0x32c,
    name: 'fuelBoxFlag',
    category: OffsetCategory.SIMULATION,
    description: 'plane in fuel box flag',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r'
  }),
  comFreqInc: new Offset({
    value: 0x358,
    name: 'comFreqInc',
    category: OffsetCategory.SIMULATION,
    description: 'COM freq increment - KHz',
    convert: '({VAL}) === 0 ? 50 : 25',
    type: Type.Int16,
    permission: 'rw'
  }),
  adfFreqInc: new Offset({
    value: 0x358,
    name: 'adfFreqInc',
    category: OffsetCategory.SIMULATION,
    description: 'ADF freq increment - KHz',
    convert: '({VAL}) === 0 ? 1.0 : 0.1',
    type: Type.Int16,
    permission: 'rw'
  }),
  reliability: new Offset({
    value: 0x372,
    name: 'reliability',
    category: OffsetCategory.SIMULATION,
    description: 'reliability - percent',
    type: Type.UInt16,
    permission: 'rw'
  }),
  lastSavedFlightName: new Offset({
    value: 0x400,
    name: 'lastSavedFlightName',
    category: OffsetCategory.SIMULATION,
    description: 'name of last saved flight',
    type: Type.String,
    length: 128,
    permission: 'r'
  }),
  elapsedTime: new Offset({
    value: 0x4a8,
    name: 'elapsedTime',
    category: OffsetCategory.SIMULATION,
    description: 'simulated flight time - seconds (paused while simulation paused)',
    type: Type.Double,
    permission: 'r'
  }),
  elapsedRealTime: new Offset({
    value: 0x588,
    name: 'elapsedRealTime',
    category: OffsetCategory.SIMULATION,
    description: 'elasped real time',
    type: Type.Double,
    permission: 'r'
  }),
  smokeSystemAvailable: new Offset({
    value: 0x5d4,
    name: 'smokeSystemAvailable',
    category: OffsetCategory.SIMULATION,
    convert: '!!{VAL}',
    description: 'smoke system available - <= FS2000',
    type: Type.UInt16,
    permission: 'r'
  }),
  slewMode: new Offset({
    value: 0x5dc,
    name: 'slewMode',
    category: OffsetCategory.SIMULATION,
    convert: '!!{VAL}',
    description: 'slew mode activated',
    type: Type.UInt16,
    permission: 'rw'
  }),
  slewRollRate: new Offset({
    value: 0x5e4,
    name: 'slewRollRate',
    category: OffsetCategory.SIMULATION,
    description: '192 gives a 360 roll in about 1 minute - -ve right, +ve left',
    type: Type.Int16,
    permission: 'rw'
  }),
  slewYawRate: new Offset({
    value: 0x5e6,
    name: 'slewYawRate',
    category: OffsetCategory.SIMULATION,
    description:
      'Slew mode turns - +ve values are left, -ve are right - 24 takes about 1 minute to complete a 360',
    type: Type.Int16,
    permission: 'rw'
  }),
  slewVerticalRate: new Offset({
    value: 0x5e8,
    name: 'slewVerticalRate',
    category: OffsetCategory.SIMULATION,
    description:
      '16384=no alt slew rate - 16383 to 0 increasing slew UP rates, 16385 to 32767 increasing slew DOWN rates',
    type: Type.Int16,
    permission: 'rw'
  }),
  slewBackwardForwardRate: new Offset({
    value: 0x5eb,
    name: 'slewBackwardForwardRate',
    category: OffsetCategory.SIMULATION,
    description: 'Slew fwd if-ve, bwd if +ve, 1=very slow ... 127=very fast, -128 fastest forward',
    type: Type.SByte,
    permission: 'rw'
  }),
  slewLeftRightRate: new Offset({
    value: 0x5ed,
    name: 'slewLeftRightRate',
    category: OffsetCategory.SIMULATION,
    description:
      'Slew left if -ve, right if +ve, 1=very slow ... 127=very fast, -128 fastest leftward',
    type: Type.SByte,
    permission: 'rw'
  }),
  slewPitchRate: new Offset({
    value: 0x5ee,
    name: 'slewPitchRate',
    category: OffsetCategory.SIMULATION,
    description: '16384=no pitch slew -16384 pitch up, 16384 pitch down, range 0-32767',
    type: Type.Int16,
    permission: 'rw'
  }),
  slewModeDisplay: new Offset({
    value: 0x5f4,
    name: 'slewModeDisplay',
    category: OffsetCategory.SIMULATION,
    description: '0=off, 1=coods/hdg/speed, 2=fps, 3=all',
    type: Type.UInt16
  }),
  flightModeDisplay: new Offset({
    value: 0x5fc,
    name: 'flightModeDisplay',
    category: OffsetCategory.SIMULATION,
    description: '0=off, 1=coods/hdg/speed, 2=fps, 3=all',
    type: Type.UInt16,
    permission: 'rw'
  }),
  replayInAction: new Offset({
    value: 0x628,
    name: 'replayInAction',
    category: OffsetCategory.SIMULATION,
    description: 'replay in action',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw'
  }),
  replayTimerCountdown: new Offset({
    value: 0x62c,
    name: 'replayTimerCountdown',
    category: OffsetCategory.SIMULATION,
    description: 'instant replay time left in seconds - controls the playback',
    type: Type.UInt32,
    permission: 'rw'
  }),
  videoRecording: new Offset({
    value: 0x760,
    name: 'videoRecording',
    category: OffsetCategory.SIMULATION,
    description: 'video recording flag - FS2002+',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  flightAnalysisMode: new Offset({
    value: 0x814,
    name: 'flightAnalysisMode',
    category: OffsetCategory.SIMULATION,
    description: '0=off 1=landing 2=course tracking 3=manoeuvres',
    type: Type.UInt32,
    permission: 'rw'
  }),
  crashDetection: new Offset({
    value: 0x830,
    name: 'crashDetection',
    category: OffsetCategory.SIMULATION,
    description:
      '0=Ignore Crash, 1=Detect Crash and restart, 2=Detect Crash and show Graph (last is not applicable to FS2002/4)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  crashDetectionFSX: new Offset({
    value: 0x832,
    name: 'crashDetectionFSX',
    category: OffsetCategory.SIMULATION,
    description: '0=Ignore Crash, 1=Detect Crash',
    type: Type.Byte,
    permission: 'r'
  }),
  crashDetectionFSXAi: new Offset({
    value: 0x833,
    name: 'crashDetectionFSXAi',
    category: OffsetCategory.SIMULATION,
    description: '0=Ignore Crash, 1=Detect Crash',
    type: Type.Byte,
    permission: 'r'
  }),
  crashed: new Offset({
    value: 0x840,
    name: 'crashed',
    category: OffsetCategory.SIMULATION,
    description: 'crashed',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'r'
  }),
  soundControl: new Offset({
    value: 0xb20,
    name: 'soundControl',
    category: OffsetCategory.SIMULATION,
    description: 'soundControl',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'rw'
  }),
  soundActive: new Offset({
    value: 0xb24,
    name: 'soundActive',
    category: OffsetCategory.SIMULATION,
    description: 'soundActive',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'r'
  }),
  scenaryComplexity: new Offset({
    value: 0xb60,
    name: 'scenaryComplexity',
    category: OffsetCategory.SIMULATION,
    description: 'scenary complexity - 0-5',
    type: Type.UInt16,
    permission: 'rw'
  }),
  internationalUnit: new Offset({
    value: 0xc18,
    name: 'internationalUnit',
    category: OffsetCategory.SIMULATION,
    description: 'international units',
    convert: '{VAL} === 0 ? `us` : {VAL} === 1 ? `metric_feet` : `metric_meters`',
    type: Type.Int16,
    permission: 'rw'
  }),
  simulationRate: new Offset({
    value: 0xc1a,
    name: 'simulationRate',
    category: OffsetCategory.SIMULATION,
    description: 'international units',
    convert: '+({VAL} / 256).toFixed(2)',
    type: Type.Int16,
    permission: 'rw'
  }),
  localTimeString: new Offset({
    value: 0xc20,
    name: 'localTimeString',
    category: OffsetCategory.SIMULATION,
    description: 'local time string hh:mm:ss',
    type: Type.String,
    length: 9,
    permission: 'r'
  }),
  realism: new Offset({
    value: 0xc44,
    name: 'realism',
    category: OffsetCategory.SIMULATION,
    description: 'realism - percent',
    type: Type.UInt16,
    permission: 'rw'
  }),
  textureQuality: new Offset({
    value: 0xc92,
    name: 'textureQuality',
    category: OffsetCategory.SIMULATION,
    description: 'texture quality - 0 to 3',
    type: Type.UInt16,
    permission: 'rw'
  }),
  macroOrLuaParameters: new Offset({
    value: 0xd6c,
    name: 'macroOrLuaParameters',
    category: OffsetCategory.SIMULATION,
    description: 'macro or LUA parameters',
    type: Type.UInt32,
    permission: 'rw'
  }),
  macroOrLuaString: new Offset({
    value: 0xd70,
    name: 'macroOrLuaString',
    category: OffsetCategory.SIMULATION,
    description: 'macro or LUA command',
    type: Type.String,
    length: 40,
    permission: 'rw'
  }),
  internationalNSSetting: new Offset({
    value: 0xd98,
    name: 'internationalNSSetting',
    category: OffsetCategory.SIMULATION,
    description: 'international N/S setting - 2=north 3=south',
    type: Type.Int16,
    permission: 'rw'
  }),
  internationalEWSetting: new Offset({
    value: 0xd9c,
    name: 'internationalEWSetting',
    category: OffsetCategory.SIMULATION,
    description: 'international E/W setting - 0=east 1=west',
    type: Type.Int16,
    permission: 'rw'
  }),
  scenaryVariableUSRVAR: new Offset({
    value: 0xdd6,
    name: 'scenaryVariableUSRVAR',
    category: OffsetCategory.SIMULATION,
    description: 'scenary variable USRVAR 0312h',
    type: Type.UInt16,
    permission: 'rw'
  }),
  scenaryVariableUSRVAR2: new Offset({
    value: 0xdd8,
    name: 'scenaryVariableUSRVAR2',
    category: OffsetCategory.SIMULATION,
    description: 'scenary variable USRVAR2 0314h',
    type: Type.UInt16,
    permission: 'rw'
  }),
  scenaryVariableUSRVAR3: new Offset({
    value: 0xdda,
    name: 'scenaryVariableUSRVAR3',
    category: OffsetCategory.SIMULATION,
    description: 'scenary variable USRVAR3 0316h',
    type: Type.UInt16,
    permission: 'rw'
  }),
  scenaryVariableUSRVAR4: new Offset({
    value: 0xddc,
    name: 'scenaryVariableUSRVAR4',
    category: OffsetCategory.SIMULATION,
    description: 'scenary variable USRVAR4 0318h',
    type: Type.UInt16,
    permission: 'r'
  }),
  scenaryVariableUSRVAR5: new Offset({
    value: 0xdde,
    name: 'scenaryVariableUSRVAR5',
    category: OffsetCategory.SIMULATION,
    description: 'scenary variable USRVAR5 031Ah',
    type: Type.UInt16,
    permission: 'rw'
  }),
  groundSceneryShadows: new Offset({
    value: 0x11a2,
    name: 'groundSceneryShadows',
    category: OffsetCategory.SIMULATION,
    description: 'ground scenery shadows - on/off',
    convert: '{VAL} === 1',
    type: Type.Byte,
    permission: 'rw'
  }),
  aircraftShadows: new Offset({
    value: 0x11a4,
    name: 'aircraftShadows',
    category: OffsetCategory.SIMULATION,
    description: 'aircraft shadows',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'rw'
  }),
  aircraftReflections: new Offset({
    value: 0x11b6,
    name: 'aircraftReflections',
    category: OffsetCategory.SIMULATION,
    description: 'aircraft shadows',
    convert: '{VAL} === 2',
    type: Type.Byte,
    permission: 'rw'
  }),
  unlimitedFuel: new Offset({
    value: 0x123f,
    name: 'unlimitedFuel',
    category: OffsetCategory.SIMULATION,
    description: 'unlimited fuel',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r'
  }),
  textDisplayMode: new Offset({
    value: 0x1274,
    name: 'textDisplayMode',
    category: OffsetCategory.SIMULATION,
    description: 'text display mode (eg: ATIS) - 0=static 1=scroll',
    type: Type.UInt16,
    permission: 'rw'
  })
};
