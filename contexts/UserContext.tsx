import { useRouter } from "next/router";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { logout } from "../api/logout";
import { User } from "../api/types";

interface ContextType {
  user?: User | null;
  setUser?: Dispatch<SetStateAction<User | null>>;
  logoutUser: () => void;
}

export const UserContext = createContext<ContextType>({});

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const logoutUser = () => {
    logout();
    setUser(null);
    router.push("/");
  };

  const value: ContextType = {
    user,
    setUser,
    logoutUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
