import React, {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";
import { fetchFinishedBooks } from "../api/fetchFinishedBooks";
import { ListItem } from "../api/types";

interface ContextType {
  finishedBooks?: ListItem[];
  setFinishedBooks?: Dispatch<SetStateAction<ListItem[]>>;
  isLoading: boolean;
  resetFinishedBooksList?: () => void;
}

export const FinishedBooks = createContext<ContextType>({});

interface FinishedBooksProviderProps {
  children: ReactNode;
}

const FinishedBooksProvider = ({ children }: FinishedBooksProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [finishedBooks, setFinishedBooks] = useState<ListItem[]>([]);

  const onComplete = (data: ListItem[]) => {
    setFinishedBooks(data);
  };

  useEffect(() => {
    if (finishedBooks.length == 0) {
      fetchFinishedBooks(setIsLoading, onComplete);
    }
  }, []);

  const resetFinishedBooksList = () => {
    fetchFinishedBooks(setIsLoading, setFinishedBooks, onComplete);
  };

  const value: ContextType = {
    finishedBooks,
    setFinishedBooks,
    isLoading,
    resetFinishedBooksList,
  };

  return (
    <FinishedBooks.Provider value={value}>{children}</FinishedBooks.Provider>
  );
};

export default FinishedBooksProvider;
