import React, {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
} from "react";
import { IBook } from "../api/types";

interface ContextType {
  books?: IBook[];
  setBooks?: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<ContextType>({});

interface BooksProviderProps {
  children: ReactNode;
}

const BooksProvider = ({ children }: BooksProviderProps) => {
  const [books, setBooks] = useState<IBook[]>([]);

  const value: ContextType = {
    books,
    setBooks,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
