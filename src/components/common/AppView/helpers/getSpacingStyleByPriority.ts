import { AppSize } from '../../../../constants/common';
import { getAppSize } from '../../../../helpers/getAppSize';
import { AppSizeUnion } from '../../../../types/ui';

type SpacingStyleByPriorityKey = 'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right'

type GetSpacingStyleByPriorityParams = Record<SpacingStyleByPriorityKey, AppSizeUnion | undefined>

export const getSpacingStyleByPriority = ({
  all,
  x,
  y,
  top,
  bottom,
  left,
  right,
}: GetSpacingStyleByPriorityParams) => {
  const p = getAppSize(all);
  const pX = getAppSize(x);
  const pY = getAppSize(y);

  return {
    all: p,
    top: p ?? pY ?? getAppSize(top),
    bottom: p ?? pY ?? getAppSize(bottom),
    left: p ?? pX ?? getAppSize(left),
    right: p ?? pX ?? getAppSize(right),
  } satisfies Record<Exclude<SpacingStyleByPriorityKey, 'x' | 'y'>, AppSize | undefined>;
};