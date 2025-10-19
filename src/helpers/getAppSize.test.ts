import { AppSizeUnion } from '../types/ui';
import { getAppSize } from './getAppSize';
import { AppSize } from '../constants/common';

type TestCase = {
    input: AppSizeUnion | undefined;
    fallback: AppSize | undefined;
    expected: AppSize | undefined;
};

const testCases: TestCase[] = [
  {
    input: 'xxs',
    fallback: undefined,
    expected: AppSize.xxs,
  },
  {
    input: '3xl',
    fallback: undefined,
    expected: AppSize['3xl'],
  },
  {
    input: undefined,
    fallback: undefined,
    expected: undefined,
  },
  {
    input: null as unknown as undefined,
    fallback: undefined,
    expected: undefined,
  },
  {
    input: undefined,
    fallback: AppSize.m,
    expected: AppSize.m,
  },
  {
    input: null as unknown as undefined,
    fallback: AppSize.xxl,
    expected: AppSize.xxl,
  },
  {
    input: 'l',
    fallback: AppSize.m,
    expected: AppSize.l,
  },
  {
    input: 's',
    fallback: AppSize.xxl,
    expected: AppSize.s,
  },
];

describe('getAppSize', () => {
  it.each(testCases)(
    'returns $expected when input=$input and fallback=$fallback',
    ({ input, fallback, expected }) => {
      expect(getAppSize(input, fallback)).toBe(expected);
    },
  );
});