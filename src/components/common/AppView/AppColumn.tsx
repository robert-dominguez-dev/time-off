import { forwardRef, Ref } from 'react';
import { AppView, AppViewProps } from './AppView';

export type AppColumnProps = Omit<AppViewProps, 'flexDirection'>;

const _AppColumn = ({ children, ...props }: AppColumnProps, ref: Ref<HTMLDivElement>) => (
  <AppView
    {...props}
    ref={ref}
    flexDirection={'column'}
  >
    {children}
  </AppView>
);

export const AppColumn = forwardRef<HTMLDivElement, AppColumnProps>(_AppColumn);