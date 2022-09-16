import React, {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";
import { fetchBooks } from "../api/fetchBooks";
import { IBook } from "../api/types";

interface ContextType {
  books?: IBook[];
  setBooks?: Dispatch<SetStateAction<IBook[]>>;
  resetBooks?: () => void;
}

export const BooksContext = createContext<ContextType>({});

interface BooksProviderProps {
  children: ReactNode;
}

const BooksProvider = ({ children }: BooksProviderProps) => {
  const [books, setBooks] = useState<IBook[]>([]);

  const onComplete = (books: IBook[]) => {
    setBooks(books);
  };

  useEffect(() => {
    fetchBooks(onComplete);
  }, []);

  const resetBooks = () => {
    fetchBooks(onComplete);
  };

  const value: ContextType = {
    books,
    setBooks,
    resetBooks,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
