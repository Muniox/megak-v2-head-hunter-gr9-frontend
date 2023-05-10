import { LoginRequest, UserResponse } from '@backendTypes';
import { ReactNode } from 'react';

export interface AuthContextProps {
  currentUser: UserResponse | null;
  login: (credentials: LoginRequest) => Promise<void>;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}
