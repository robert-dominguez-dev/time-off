import { User, UserRole } from '../types/models';

export enum AppStorageKey {
    timeOffRequests = 'timeOffRequests',
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

export const aliceEmployee: User = {
  username: 'Alice',
  name: 'Alice Employee',
  role: UserRole.employee,
};

export const karelEmployee: User = {
  username: 'Karel',
  name: 'Karel Employee',
  role: UserRole.employee,
};

export const bobSupervisor: User = {
  username: 'Bob',
  name: 'Bob Supervisor',
  role: UserRole.supervisor,
};

export const mockedUsers: User[] = [
  aliceEmployee,
  karelEmployee,
  bobSupervisor,
];