import { User, UserRole } from '../types/models';

export enum AppStorageKey {
    timeOffRequests = 'timeOffRequests',
    user = 'user',
}

export const storageHandler = {
  getItem: <TValue>(key: AppStorageKey | string): TValue | undefined => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : undefined;
    } catch (error) {
      console.error(error);
    }
  },
  setItem: <TValue>(key: AppStorageKey | string, value: TValue): void => {
    try {
      const valueToStore = value ? JSON.stringify(value) : '';
      localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error(error);
    }
  },
  removeItem: (key: AppStorageKey | string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  },
};

export const justinEmployee: User = {
  username: 'JustInTime',
  name: 'Justin Time',
  role: UserRole.employee,
};

export const alEmployee: User = {
  username: 'AlGorithm',
  name: 'Al Gorithm',
  role: UserRole.employee,
};

export const ellaSupervisor: User = {
  username: 'EllaVator',
  name: 'Ella Vator',
  role: UserRole.supervisor,
};

export const mockedUsers: User[] = [
  justinEmployee,
  alEmployee,
  ellaSupervisor,
];