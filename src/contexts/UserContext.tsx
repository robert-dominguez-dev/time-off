import React, { createContext, useContext, useState } from 'react';

import { User } from '../types/models';
import { mockedUsers } from './constants';

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
  const [ user, setUser ] = useState<User>();

  const login = (username: string) => {
    const foundUser = mockedUsers.find(u => u.username === username);
    console.log(foundUser);
    if (foundUser) {
      setUser(foundUser);
    }
  };

  const logout = () => setUser(undefined);

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