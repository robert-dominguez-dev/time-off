import { checkIsNullish } from './checkIsNullish';

type TestCase = {
    input: unknown;
    expected: boolean;
};

const testCases: TestCase[] = [
  {
    input: null,
    expected: true,
  },
  {
    input: undefined,
    expected: true,
  },
  {
    input: 0,
    expected: false,
  },
  {
    input: false,
    expected: false,
  },
  {
    input: '',
    expected: false,
  },
  {
    input: NaN,
    expected: false,
  },
  {
    input: 42,
    expected: false,
  },
  {
    input: 'hello',
    expected: false,
  },
  {
    input: true,
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
];

describe('checkIsNullish', () => {
  it.each(testCases)(
    'returns $expected for input=$input',
    ({ input, expected }) => {
      expect(checkIsNullish(input)).toBe(expected);
    },
  );
});