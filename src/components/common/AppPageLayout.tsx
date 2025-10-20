import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { ChildrenProp, MaybeElement } from '../../types/common';
import { AppColumn, AppColumnProps } from './AppView/AppColumn';
import { useUser } from '../../contexts/UserContext';
import { AppIcon } from './AppIcon';

type AppPageLayoutProps = ChildrenProp & Pick<AppColumnProps, 'gap'> & {
    title: string,
    withBackButton?: boolean,
}

export const AppPageLayout = ({ children, title, gap, withBackButton }: AppPageLayoutProps) => {
  const router = useIonRouter();

  const { user, logout } = useUser();

  const backHeaderButton: MaybeElement = withBackButton ? (
    <IonButton slot={'start'} fill={'clear'} size={'small'} onClick={() => router.goBack()}>
      <AppIcon slot={'start'} size={'large'} icon={'arrowBack'} />
    </IonButton>
  ) : null;

  const logoutHeaderButton: MaybeElement = user ? (
    <IonButton slot={'end'} fill={'clear'} size={'small'} onClick={logout}>
      <AppIcon slot={'end'} size={'large'} icon={'logOutOutline'} />
    </IonButton>
  ) : null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {backHeaderButton}
          <IonTitle>{title.toUpperCase()}</IonTitle>
          {logoutHeaderButton}
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
