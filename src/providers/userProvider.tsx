import React, {createContext, useState} from 'react';
import UserModel from '../models/userModel';

// Define the interface for the context value
interface UserContextValue {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
  isAuthentificated: boolean;
}

// Create the context
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

  // Create the context value object
  const contextValue: UserContextValue = {
    user,
    setUser,
    isAuthentificated,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export {UserContext, UserProvider};
