import React from 'react';
import { useUser } from '../../contexts/UserContext';
import { UserRole } from '../../types/models';
import { SupervisorRoutes } from '../supervisor/SupervisorRoutes';
import { EmployeeRoutes } from '../employee/EmployeeRoutes';
import { LoginRoutes } from '../login/LoginRoutes';

export const AppContent = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <LoginRoutes />
    );
  }

  switch (user.role) {
    case UserRole.supervisor: {
      return <SupervisorRoutes />;
    }
    case UserRole.employee: {
      return <EmployeeRoutes />;
    }
    default: {
      return user.role satisfies never;
    }
  }
};