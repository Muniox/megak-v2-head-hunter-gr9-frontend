import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextProps, AuthContextProviderProps } from '@frontendTypes';

import { LoginRequest, UserResponse } from '@backendTypes';
import { apiServer, endpoints } from '../services';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserResponse | null>(
    JSON.parse(localStorage.getItem('user') || 'null'),
  );

  const login = async (credentials: LoginRequest) => {
    // const user = {
    //   id: 'dff59378-a920-4e87-9f50-5b35fe0f225d',
    //   email: 'magdalena.michalska@example.com',
    //   role: UserRole.ADMIN,
    //   isActive: true,
    // };
    // setCurrentUser(user as UserResponse);
    const response = await apiServer.post<LoginRequest, UserResponse>(endpoints.login, credentials);

    if (response.ok && response.data) {
      setCurrentUser(response.data);
      return response.data;
    } else {
      throw new Error(
        Array.isArray(response.error) ? response.error[0].message : response.error?.message || 'Unknown error',
      );
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth must be used within an AuthContextProvider.');
  }

  return auth;
};
