import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import { UserProvider } from './contexts/UserContext';
import { TimeOffRequestsProvider } from './contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import React from 'react';
import { AppContent } from './components/common/AppContent';
import { IonReactRouter } from '@ionic/react-router';

setupIonicReact();

const App = () => (
  <UserProvider>
    <TimeOffRequestsProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <AppContent />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </TimeOffRequestsProvider>
  </UserProvider>
);

export default App;
