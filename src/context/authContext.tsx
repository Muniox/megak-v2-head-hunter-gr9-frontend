import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextProps, AuthContextProviderProps } from '@frontendTypes';

import { LoginRequest, UserResponse } from '@backendTypes';
import { apiServer, ENDPOINTS } from '../services';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserResponse | null>(
    JSON.parse(localStorage.getItem('user') || 'null'),
  );

  const login = async (credentials: LoginRequest) => {
    const response = await apiServer.post<LoginRequest, UserResponse>(ENDPOINTS.login, credentials);

    if (response.ok && response.data) {
      setCurrentUser(response.data);
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
