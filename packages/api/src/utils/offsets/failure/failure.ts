import { Type } from 'fsuipc.js';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const failure: OffsetList = {
  hydFailure: new Offset({
    value: 0xb62,
    name: 'hydFailure',
    category: OffsetCategory.FAILURE,
    description: 'hydraulic failure',
    type: Type.Byte,
    convert: '{VAL} ? 1 : 0',
    permission: 'w'
  }),
  brakeFailure: new Offset({
    value: 0xb63,
    name: 'brakeFailure',
    category: OffsetCategory.FAILURE,
    description: 'brake failure - left, right, total',
    convert: '{VAL} === `left` ? 0 : {VAL} === `right` ? 1 : 2',
    type: Type.Byte,
    permission: 'w'
  }),
  ADFFailure: new Offset({
    value: 0xb64,
    name: 'ADFFailure',
    category: OffsetCategory.FAILURE,
    description: 'ADF failure',
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  ASIFailure: new Offset({
    value: 0xb65,
    name: 'ASIFailure',
    category: OffsetCategory.FAILURE,
    description: 'ASI failure',
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  altimeterFailure: new Offset({
    value: 0xb66,
    name: 'altimeterFailure',
    category: OffsetCategory.FAILURE,
    description: 'altimeter failure',
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  attitudeIndicatorFailure: new Offset({
    value: 0xb67,
    name: 'attitudeIndicatorFailure',
    category: OffsetCategory.FAILURE,
    description: 'attitude indicator failure',
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  com1Failure: new Offset({
    value: 0xb68,
    name: 'com1Failure',
    category: OffsetCategory.FAILURE,
    description: 'COM1 failure',
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  compassFailure: new Offset({
    value: 0xb69,
    name: 'compassFailure',
    category: OffsetCategory.FAILURE,
    description: 'compass failure',
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  electricsFailure: new Offset({
    value: 0xb6a,
    name: 'electricsFailure',
    category: OffsetCategory.FAILURE,
    description: 'electrics failure',
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    type: Type.Byte,
    permission: 'rw'
  }),
  engineFailure: new Offset({
    value: 0xb6b,
    name: 'engineFailure',
    category: OffsetCategory.FAILURE,
    description: 'engine failure',
    type: Type.BitArray,
    length: 4,
    permission: 'rw'
  }),
  fuelIndicatorFailure: new Offset({
    value: 0xb6c,
    name: 'fuelIndicatorFailure',
    category: OffsetCategory.FAILURE,
    description: 'fuel indicator failure',
    type: Type.Byte,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    permission: 'rw'
  }),
  headingFailure: new Offset({
    value: 0xb6d,
    name: 'headingFailure',
    category: OffsetCategory.FAILURE,
    description: 'direction indicator failure',
    type: Type.Byte,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    permission: 'rw'
  }),
  VSIFailure: new Offset({
    value: 0xb6e,
    name: 'VSIFailure',
    category: OffsetCategory.FAILURE,
    description: 'VSI failure',
    type: Type.Byte,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    permission: 'rw'
  }),
  transponderFailure: new Offset({
    value: 0xb6f,
    name: 'transponderFailure',
    category: OffsetCategory.FAILURE,
    description: 'transponder failure',
    type: Type.Byte,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    permission: 'rw'
  }),
  NAVFailure: new Offset({
    value: 0xb70,
    name: 'NAVFailure',
    category: OffsetCategory.FAILURE,
    description: 'NAV radio gauge failure',
    type: Type.Byte,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    permission: 'rw'
  }),
  pitotFailure: new Offset({
    value: 0xb71,
    name: 'pitotFailure',
    category: OffsetCategory.FAILURE,
    description: 'pitot failure',
    type: Type.Byte,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    permission: 'rw'
  }),
  turnCoordinatorFailure: new Offset({
    value: 0xb72,
    name: 'turnCoordinatorFailure',
    category: OffsetCategory.FAILURE,
    description: 'turn coordinator failure',
    type: Type.Byte,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    permission: 'rw'
  }),
  vacuumFailure: new Offset({
    value: 0xb73,
    name: 'vacuumFailure',
    category: OffsetCategory.FAILURE,
    description: 'vacuum failure',
    type: Type.Byte,
    convert: 'typeof {VAL} === `boolean` ? {VAL} ? 1 : 0 : !!{VAL}',
    permission: 'rw'
  })
};
