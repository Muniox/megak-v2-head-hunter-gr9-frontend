import React, { createContext, useEffect, useState } from 'react';
import { AuthContextProps, AuthContextProviderProps } from '@frontendTypes';

import { LoginRequest, UserResponse } from '@backendTypes';
import { apiClient, ENDPOINTS } from '../services';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserResponse | null>(
    JSON.parse(localStorage.getItem('user') || 'null'),
  );

  const login = async (credentials: LoginRequest) => {
    const response = await apiClient.post<LoginRequest, UserResponse>(ENDPOINTS.login, credentials);

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
