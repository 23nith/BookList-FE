import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { User } from "../api/types";

interface ContextType {
  user?: User;
  setUser?: Dispatch<SetStateAction<User>>;
}

export const UserContext = createContext<ContextType>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User>(null);

  const value: ContextType = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
