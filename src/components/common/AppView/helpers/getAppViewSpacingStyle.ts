import { CSSProperties } from 'react';
import { AppSizeUnion } from '../../../../constants/common';
import { getSpacingStyleByPriority } from './getSpacingStyleByPriority';

type SpacingStyleKey = 'm' | 'mx' | 'my' | 'mt' | 'mb' | 'ml' | 'mr' | 'p' | 'px' | 'py' | 'pt' | 'pb' | 'pl' | 'pr'

export type GetAppViewSpacingStyleParams = { [key in SpacingStyleKey]?: AppSizeUnion }

export const getAppViewSpacingStyle = ({
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
}: GetAppViewSpacingStyleParams) => {
  const {
    all: margin,
    top: marginTop,
    bottom: marginBottom,
    left: marginLeft,
    right: marginRight,
  } = getSpacingStyleByPriority({
    all: m,
    x: mx,
    y: my,
    top: mt,
    bottom: mb,
    left: ml,
    right: mr,
  });

  const {
    all: padding,
    top: paddingTop,
    bottom: paddingBottom,
    left: paddingLeft,
    right: paddingRight,
  } = getSpacingStyleByPriority({
    all: p,
    x: px,
    y: py,
    top: pt,
    bottom: pb,
    left: pl,
    right: pr,
  });

  return {
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  } satisfies CSSProperties;
};