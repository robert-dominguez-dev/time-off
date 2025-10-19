export type HexColor = `#${string}`;

type DesignSystemColorUnion = 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type DesignSystemColors = Partial<Record<DesignSystemColorUnion, HexColor>>

export const appDesignSystemColors = {
  primary: {
    50: '#E8F5E9',
    100: '#C8E6C9',
    200: '#A5D6A7',
    300: '#81C784',
    400: '#66BB6A',
    500: '#388E3C',
    600: '#2E7D32',
  },
  grayscale: {
    0: '#ffffff',
    50: '#eeeeee',
    100: '#dddddd',
    200: '#cccccc',
    300: '#aaaaaa',
    400: '#999999',
    500: '#888888',
    600: '#666666',
    700: '#444444',
    800: '#222222',
    900: '#000000',
  },
  negative: {
    0: '#ffb7be',
    50: '#ff7b89',
    100: '#ff5465',
    200: '#ff2c41',
    300: '#f70c23',
    400: '#d5071b',
    500: '#b80c1d',
    600: '#9d101e',
    700: '#83121d',
    800: '#6a131c',
    900: '#531219',
  },
} satisfies Record<string, DesignSystemColors>;

export const appColors = {
  transparent: '#00000000',
  primary: appDesignSystemColors.primary['500'],
  textPrimary: appDesignSystemColors.grayscale['800'],
  textSecondary: appDesignSystemColors.grayscale['400'],
  background: appDesignSystemColors.grayscale['50'],
  borderColor: appDesignSystemColors.grayscale['800'],
  negative: appDesignSystemColors.negative['400'],
} as const satisfies Record<string, HexColor>;
