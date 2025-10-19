import { IonIcon } from '@ionic/react';
import * as ionicons from 'ionicons/icons';

export type AppIconUnion = keyof typeof ionicons

type AppIconProps = {
    slot?: 'start' | 'end';
    size?: 'small' | 'large'
    icon: AppIconUnion;
}

export const AppIcon = ({ icon, ...props }: AppIconProps) => (
  <IonIcon {...props} icon={ionicons[icon]} />
);
