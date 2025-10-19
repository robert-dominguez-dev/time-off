import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import { UserRole } from '../../../types/models';
import { SupervisorRoutes } from '../../supervisor/SupervisorRoutes';
import { EmployeeRoutes } from '../../employee/EmployeeRoutes';
import { LoginRoutes } from '../../login/LoginRoutes';
import { AppActionBar } from '../AppActionBar';
import { employeeActionBarItems } from './constants';
import { IonRouterOutlet, IonTabs } from '@ionic/react';

export const AppContent = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <IonRouterOutlet>
        <LoginRoutes />
      </IonRouterOutlet>
    );
  }

  switch (user.role) {
    case UserRole.supervisor: {
      return (
        <IonTabs>
          <IonRouterOutlet>
            <SupervisorRoutes />
          </IonRouterOutlet>
          <AppActionBar items={[]} />
        </IonTabs>
      );
    }
    case UserRole.employee: {
      return (
        <IonTabs>
          <IonRouterOutlet>
            <EmployeeRoutes />
          </IonRouterOutlet>
          <AppActionBar items={employeeActionBarItems} />
        </IonTabs>
      );
    }
    default: {
      return user.role satisfies never;
    }
  }
};