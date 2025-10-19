import type { Config } from 'prettier';

const config = { 
  arrowParens: 'avoid',
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  singleAttributePerLine: true,
  jsxSingleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: false,
} satisfies Config;

export default config;
