import React, {createContext, useEffect, useState} from 'react';
import UserModel from '../models/userModel';
import AuthService from '../services/auth/authService';
import useAuthService from '../hooks/service';

interface UserContextValue {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
  isAuthentificated: boolean;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
  isAuthentificated: false,
});

type Props = {
  children: React.ReactNode;
};

const UserProvider = ({children}: Props) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const isAuthentificated = user !== null;
  const authService = useAuthService();

  const contextValue: UserContextValue = {
    user,
    setUser,
    isAuthentificated,
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  async function getCurrentUser() {
    try {
      const result = await authService.getCurrentUser();
      setUser(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export {UserContext, UserProvider};
