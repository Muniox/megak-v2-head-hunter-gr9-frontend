import React, { createContext, useEffect, useState } from 'react';
import { AuthContextProps, AuthContextProviderProps, ClientApiUserResponse } from '@frontendTypes';
import { RegisterRequest, UserResponse } from '@backendTypes';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserResponse | null>(
    JSON.parse(localStorage.getItem('user') || 'null'),
  );

  const login = async (inputs: RegisterRequest) => {
    const data = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const response = (await data.json()) as ClientApiUserResponse;
    if (response.ok) {
      setCurrentUser(response.data ?? null);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      throw new Error(
        Array.isArray(response.error) ? response.error[0].message : response.error?.message || 'Unknown error',
      );
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>;
};
