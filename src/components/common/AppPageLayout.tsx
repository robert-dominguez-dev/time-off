import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ChildrenProp } from '../../types/common';
import { AppColumn, AppColumnProps } from './AppView/AppColumn';

type AppPageLayoutProps = ChildrenProp & Pick<AppColumnProps, 'gap'> & { title: string }

export const AppPageLayout = ({ children, title, gap }: AppPageLayoutProps) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <AppColumn pt={'l'} gap={gap}>
        {children}
      </AppColumn>
    </IonContent>
  </IonPage>
);
