import { AppSizeUnion } from '../../../../constants/common';
import { getAppSize } from '../../../../helpers/getAppSize';
import { BorderProps } from '../../../../types/ui';

const DEFAULT_BORDER_WIDTH = 2;

export type GetBorderPropsParams = {
    borderWidth?: AppSizeUnion;
    borderColor?: string;
    disableBorderBottom?: boolean;
}

export const getBorderProps = ({
  borderWidth,
  borderColor,
  disableBorderBottom,
}: GetBorderPropsParams): BorderProps | undefined => {
  const borderWidthEvaluated: BorderProps['borderWidth'] = getAppSize(borderWidth) ?? DEFAULT_BORDER_WIDTH;

  return borderColor
    ? {
      borderColor: borderColor,
      borderWidth: borderWidthEvaluated,
      borderBottomWidth: disableBorderBottom ? 0 : borderWidthEvaluated,
    }
    : undefined;
};