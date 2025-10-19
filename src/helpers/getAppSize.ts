import { AppSize, AppSizeUnion } from '../constants/common';
import { checkIsNullish } from './checkIsNullish';
import { checkIsValidNumber } from './checkIsValidNumber';

export const getAppSize = (
  sizeUnion: AppSizeUnion | undefined,
  fallback?: AppSize,
): AppSize | undefined => {
  if (checkIsNullish(sizeUnion)) {
    return fallback;
  }

  if (checkIsValidNumber(sizeUnion)) {
    return sizeUnion;
  }

  return AppSize[sizeUnion];
};
