import { forwardRef, Ref } from 'react';
import { AppView, AppViewProps } from './AppView';

export type AppRowProps = Omit<AppViewProps, 'flexDirection'>;

const _AppRow = ({ children, ...props }: AppRowProps, ref: Ref<HTMLDivElement>) => (
  <AppView
    {...props}
    ref={ref}
    flexDirection={'row'}
  >
    {children}
  </AppView>
);

export const AppRow = forwardRef<HTMLDivElement, AppViewProps>(_AppRow);