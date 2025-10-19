import { CSSProperties } from 'react';
import { AppSize } from '../constants/common';

export type BorderProps = Pick<CSSProperties, 'borderColor' | 'borderWidth' | 'borderBottomWidth'>;

export type AppSizeUnion = keyof typeof AppSize | number;