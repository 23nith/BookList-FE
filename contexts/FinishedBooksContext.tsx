import React, {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
} from "react";
import { ListItem } from "../api/types";

interface ContextType {
  finishedBooks?: ListItem[];
  setFinishedBooks?: Dispatch<SetStateAction<ListItem[]>>;
}

export const FinishedBooks = createContext<ContextType>({});

interface FinishedBooksProviderProps {
  children: ReactNode;
}

const FinishedBooksProvider = ({ children }: FinishedBooksProviderProps) => {
  const [finishedBooks, setFinishedBooks] = useState<FinishedBooks[]>([]);

  const value: ContextType = {
    finishedBooks,
    setFinishedBooks,
  };

  return (
    <FinishedBooks.Provider value={value}>{children}</FinishedBooks.Provider>

  );
};

export default FinishedBooksProvider;
