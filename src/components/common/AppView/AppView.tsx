import { forwardRef, HTMLAttributes, Ref } from 'react';
import { ChildrenProp } from '../../../types/common';
import { getAppViewStyle, GetAppViewStyleParams } from './hooks/getAppViewStyle';

export type AppViewProps = Partial<ChildrenProp> & GetAppViewStyleParams & Pick<
    HTMLAttributes<HTMLDivElement>,
    'id' | 'className' | 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseDown'
> & { styleOverride?: HTMLAttributes<HTMLDivElement>['style'] }

const _AppView = ({
  children,
  id,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  styleOverride,
  ...props
}: AppViewProps, ref: Ref<HTMLDivElement>) => {
  const style = getAppViewStyle(props);

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        ...style,
        ...styleOverride,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
};

export const AppView = forwardRef<HTMLDivElement, AppViewProps>(_AppView);