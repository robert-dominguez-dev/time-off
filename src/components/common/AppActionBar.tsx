import { IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import { AppIcon, AppIconUnion } from './AppIcon';
import { useLocation } from 'react-router';

export type ActionBarItem = {
    tab: string;
    href: string;
    label?: string;
    icon?: AppIconUnion;
};

export type AppActionBarProps = {
    items: ActionBarItem[];
}

export const AppActionBar = ({ items }: AppActionBarProps) => {
  const { pathname } = useLocation();

  return (
    <IonTabBar slot={'bottom'}>
      {items.map(({ tab, href, icon, label }) => {
        return (
          <IonTabButton
            key={tab}
            tab={tab}
            href={href}
            selected={pathname === href}
          >
            {icon && <AppIcon icon={icon} />}
            {label && (<IonLabel>{label.toUpperCase()}</IonLabel>)}
          </IonTabButton>
        );
      })}
    </IonTabBar>
  );
};