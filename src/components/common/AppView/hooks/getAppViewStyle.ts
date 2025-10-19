import { getBorderProps, GetBorderPropsParams } from '../helpers/getBorderProps';
import { CSSProperties } from 'react';
import { AppSizeUnion } from '../../../../types/ui';
import { getAppViewSpacingStyle } from '../helpers/getAppViewSpacingStyle';
import { getAppSize } from '../../../../helpers/getAppSize';

export type GetAppViewStyleParams = GetBorderPropsParams &
    Pick<
        CSSProperties,
        | 'height'
        | 'width'
        | 'position'
        | 'top'
        | 'bottom'
        | 'left'
        | 'right'
        | 'alignSelf'
        | 'alignItems'
        | 'justifyContent'
        | 'flexDirection'
        | 'flexWrap'
        | 'minHeight'
        | 'maxHeight'
        | 'minWidth'
        | 'maxWidth'
        | 'zIndex'
        | 'pointerEvents'
        | 'opacity'
        | 'cursor'
        | 'transition'
        | 'transform'
        | 'boxShadow'
        | 'overflow'
        | 'filter'
        | 'aspectRatio'
        | 'flexBasis'
        | 'backgroundColor'
    > & {
    m?: AppSizeUnion;
    mx?: AppSizeUnion;
    my?: AppSizeUnion;
    mt?: AppSizeUnion;
    mb?: AppSizeUnion;
    ml?: AppSizeUnion;
    mr?: AppSizeUnion;
    p?: AppSizeUnion;
    px?: AppSizeUnion;
    py?: AppSizeUnion;
    pt?: AppSizeUnion;
    pb?: AppSizeUnion;
    pl?: AppSizeUnion;
    pr?: AppSizeUnion;
    gap?: AppSizeUnion;
    borderRadius?: AppSizeUnion;
    borderTopLeftRadius?: AppSizeUnion;
    borderTopRightRadius?: AppSizeUnion;
    grow?: boolean;
    shrink?: boolean;
}

export const getAppViewStyle = ({
  width,
  height,
  position,
  top,
  bottom,
  left,
  right,
  alignSelf,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  zIndex,
  pointerEvents,
  opacity,
  cursor,
  transition,
  borderWidth,
  transform,
  boxShadow,
  overflow,
  filter,
  aspectRatio,
  flexBasis = 0,
  backgroundColor,
  borderColor,
  disableBorderBottom,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  gap,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  grow,
  shrink,
}: GetAppViewStyleParams) => {
  const borderProps = getBorderProps({
    borderWidth,
    borderColor,
    disableBorderBottom,
  });

  const spacingStyle = getAppViewSpacingStyle({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
  });

  return {
    ...borderProps,
    ...spacingStyle,
    width,
    height,
    position,
    top,
    bottom,
    left,
    right,
    alignSelf,
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    zIndex,
    pointerEvents,
    opacity,
    cursor,
    transition,
    transform,
    boxShadow,
    overflow,
    filter,
    aspectRatio,
    flexBasis,
    backgroundColor,
    display: 'flex',
    gap: getAppSize(gap),
    borderRadius: getAppSize(borderRadius),
    borderTopLeftRadius: getAppSize(borderRadius) || getAppSize(borderTopLeftRadius),
    borderTopRightRadius: getAppSize(borderRadius) || getAppSize(borderTopRightRadius),
    flexGrow: Number(!!grow),
    flexShrink: Number(!!shrink),
  } satisfies CSSProperties;
};