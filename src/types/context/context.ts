import { LoginRequest, UserResponse } from '@backendTypes';
import { ReactNode } from 'react';

export interface AuthContextProps {
  currentUser: UserResponse | null;
  login: (credentials: LoginRequest) => Promise<UserResponse>;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}
