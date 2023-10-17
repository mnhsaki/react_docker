// AuthInit.tsx

import { useEffect, ReactNode } from 'react';

import { getAuth } from './AuthHelpers';

interface AuthInitProps {
  children: ReactNode;
}

const AuthInit = ({ children }: AuthInitProps) => {
  const { setCurrentUser, saveAuth } = useAuth();

  useEffect(() => {
    const storedAuth = getAuth();
    if (storedAuth) {
      setCurrentUser(storedAuth);
    } else {
      saveAuth(undefined); // Logout if no stored authentication data
    }
  }, []);

  return <>{children}</>;
};

export default AuthInit;
function useAuth(): { setCurrentUser: any; saveAuth: any; } {
    throw new Error('Function not implemented.');
}

