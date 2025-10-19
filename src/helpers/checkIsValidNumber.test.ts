import { checkIsValidNumber } from './checkIsValidNumber';

type TestCase = {
    input: unknown;
    expected: boolean;
};

const testCases: TestCase[] = [
  {
    input: 0,
    expected: true,
  },
  {
    input: 42,
    expected: true,
  },
  {
    input: -5.5,
    expected: true,
  },
  {
    input: Number.MAX_SAFE_INTEGER,
    expected: true,
  },
  {
    input: Number.MIN_SAFE_INTEGER,
    expected: true,
  },
  {
    input: Infinity,
    expected: false,
  },
  {
    input: -Infinity,
    expected: false,
  },
  {
    input: NaN,
    expected: false,
  },
  {
    input: '42',
    expected: false,
  },
  {
    input: true,
    expected: false,
  },
  {
    input: null,
    expected: false,
  },
  {
    input: undefined,
    expected: false,
  },
  {
    input: [],
    expected: false,
  },
  {
    input: {},
    expected: false,
  },
  {
    input: () => 42,
    expected: false,
  },
];

describe('checkIsValidNumber', () => {
  it.each(testCases)('returns $expected for input=$input', ({ input, expected }) => {
    expect(checkIsValidNumber(input)).toBe(expected);
  });
});