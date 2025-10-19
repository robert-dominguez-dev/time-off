import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ChildrenProp, MaybeElement } from '../../types/common';
import { AppColumn, AppColumnProps } from './AppView/AppColumn';
import { useUser } from '../../contexts/UserContext';
import { AppIcon } from './AppIcon';

type AppPageLayoutProps = ChildrenProp & Pick<AppColumnProps, 'gap'> & {
    title: string,
}

export const AppPageLayout = ({ children, title, gap }: AppPageLayoutProps) => {
  const { user, logout } = useUser();

  const logoutButton: MaybeElement = user ? (
    <IonButton slot={'end'} fill={'clear'} size={'small'} onClick={logout}>
      <AppIcon slot={'end'} size={'large'} icon={'logOutOutline'} />
    </IonButton>
  ) : null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size={'large'}>{title}</IonTitle>
          {logoutButton}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AppColumn pt={'l'} gap={gap}>
          {children}
        </AppColumn>
      </IonContent>
    </IonPage>
  );
};
