import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IBook } from "../api/types";

interface ContextType {
  book?: IBook;
  setBook?: Dispatch<SetStateAction<IBook>>;
}

export const ShowBookContext = createContext<ContextType>({});

interface ShowBookContextProviderProps {
  children: ReactNode;
}

const ShowBookContextProvider = ({
  children,
}: ShowBookContextProviderProps) => {
  const [book, setBook] = useState<IBook>({});

  const value: ContextType = {
    book,
    setBook,
  };

  return (
    <ShowBookContext.Provider value={value}>
      {children}
    </ShowBookContext.Provider>
  );
};

export default ShowBookContextProvider;
