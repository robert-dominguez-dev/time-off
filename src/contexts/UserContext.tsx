import React, { createContext, useContext, useState } from 'react';

import { User } from '../types/models';
import { AppStorageKey, mockedUsers, storageHandler } from './constants';

const initialUser = storageHandler.getItem<User | undefined>(AppStorageKey.user);

type UserContextProps = {
    user: User | undefined;
    login: (userId: string) => void;
    logout: () => void;
};

const UserContext = createContext<UserContextProps>({
  user: undefined,
  login: () => undefined,
  logout: () => undefined,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ user, setUser ] = useState<User | undefined>(initialUser);

  const login = (username: string) => {
    const foundUser = mockedUsers.find(u => u.username === username);

    if (foundUser) {
      setUser(foundUser);
      storageHandler.setItem(AppStorageKey.user, foundUser);
    }
  };

  const logout = () => {
    storageHandler.removeItem(AppStorageKey.user);
    setUser(undefined);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);