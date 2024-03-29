import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const helicopter: OffsetList = {
  rotorbreakActive: new Offset({
    value: 0x81e,
    name: 'rotorbreakActive',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor brake active - Robinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  rotorClutchActive: new Offset({
    value: 0x81f,
    name: 'rotorClutchActive',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor clutch active - Robinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  rotorChipWarning: new Offset({
    value: 0x820,
    name: 'rotorChipWarning',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor chip detected - Rbinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  rotorGovWarning: new Offset({
    value: 0x821,
    name: 'rotorGovWarning',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor gov active - Rbinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  rotorBreakApplication: new Offset({
    value: 0x822,
    name: 'rotorBreakApplication',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor brake application - percent - Robinson only',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  rotorLateralTrim: new Offset({
    value: 0x824,
    name: 'rotorLateralTrim',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor lateral trim - percent - Robinson only',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.UInt16,
    permission: 'rw'
  }),
  governorSwitch: new Offset({
    value: 0x826,
    name: 'governorSwitch',
    category: OffsetCategory.HELICOPTER,
    description: 'governor switch activated - Robinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  rotorTransmissionTemp: new Offset({
    value: 0x828,
    name: 'rotorTransmissionTemp',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor transmission temp - degrees Rankine - read only',
    type: Type.Double,
    permission: 'r'
  }),
  helicopterEngine1RPM: new Offset({
    value: 0x896,
    name: 'helicopterEngine1RPM',
    category: OffsetCategory.HELICOPTER,
    description: 'engine 1 RPM %',
    type: Type.UInt16,
    permission: 'rw'
  }),
  helicopterEngine1RPMUnscaled: new Offset({
    value: 0x898,
    name: 'helicopterEngine1RPMUnscaled',
    category: OffsetCategory.HELICOPTER,
    description: 'engine 1 RPM unscalled - multiply by engineRPMScaler to obtain derivated RPM',
    type: Type.UInt16,
    permission: 'rw'
  }),
  helicopterEngine1ElectricalLoad: new Offset({
    value: 0x8fc,
    name: 'helicopterEngine1ElectricalLoad',
    category: OffsetCategory.HELICOPTER,
    description: 'engine1 electrical load - trust only for helo - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.UInt32,
    permission: 'r'
  }),
  helicopterEngine1TransmOilPres: new Offset({
    value: 0x900,
    name: 'helicopterEngine1TransmOilPres',
    category: OffsetCategory.HELICOPTER,
    description: 'engine1 transmission oil pressure - trust only for helo - PSI',
    convert: '{VAL} / 16384',
    type: Type.UInt32,
    permission: 'r'
  }),
  helicopterEngine1TransmOilTemp: new Offset({
    value: 0x904,
    name: 'helicopterEngine1TransmOilTemp',
    category: OffsetCategory.HELICOPTER,
    description: 'engine1 transmission oil temperature - trust only for helo - C',
    convert: '{VAL} / 16384',
    type: Type.UInt32,
    permission: 'r'
  }),
  helicopterEngine1RotorRPM: new Offset({
    value: 0x908,
    name: 'helicopterEngine1RotorRPM',
    category: OffsetCategory.HELICOPTER,
    description: 'engine1 rotor RPM - percent',
    convert: '{VAL} / 16384 * 100',
    type: Type.UInt32,
    permission: 'r'
  }),
  helicopterPitchTrim: new Offset({
    value: 0xbbe,
    name: 'helicopterPitchTrim',
    description: 'helicopter pitch trim',
    category: OffsetCategory.HELICOPTER,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw'
  }),
  helicopterBankTrim: new Offset({
    value: 0xc06,
    name: 'helicopterBankTrim',
    description: 'helicopter bank trim - only when apply hello trim to both',
    category: OffsetCategory.HELICOPTER,
    convert: 'Math.round({VAL} / 16383 * 100)',
    type: Type.Int16,
    permission: 'rw'
  })
};
