import { RegisterRequest, UserResponse } from '@backendTypes';
import { ReactNode } from 'react';

export interface AuthContextProps {
  currentUser: UserResponse | null;
  login: (inputs: RegisterRequest) => Promise<void>;
}

export interface AuthContextProviderProps {
  children: ReactNode;
}
