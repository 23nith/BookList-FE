import React, {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
} from "react";
import { ListItem } from "../api/types";

interface ContextType {
  finishedBooks: ListItem[];
  setFinishedBooks: Dispatch<SetStateAction<ListItem[] | any>>;
}

export const FinishedBooks = createContext<ContextType | undefined>(undefined);

interface FinishedBooksProviderProps {
  children: ReactNode;
}

const FinishedBooksProvider = ({ children }: FinishedBooksProviderProps) => {
  const [finishedBooks, setFinishedBooks] = useState([]);

  const value: ContextType = {
    finishedBooks,
    setFinishedBooks,
  };

  return (
    <FinishedBooks.Provider value={value}>{children}</FinishedBooks.Provider>
  );
};

export default FinishedBooksProvider;
