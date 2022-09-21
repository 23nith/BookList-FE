import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IBook, ListItem } from "../api/types";

interface ContextType {
  book?: IBook;
  setBook?: Dispatch<SetStateAction<IBook>>;
  list?: ListItem;
  setList?: Dispatch<SetStateAction<ListItem>>;
}

export const ShowBookContext = createContext<ContextType>({});

interface ShowBookContextProviderProps {
  children: ReactNode;
}

const ShowBookContextProvider = ({
  children,
}: ShowBookContextProviderProps) => {
  const [book, setBook] = useState<IBook>({});
  const [list, setList] = useState<ListItem>({});

  const value: ContextType = {
    book,
    setBook,
    list,
    setList,
  };

  return (
    <ShowBookContext.Provider value={value}>
      {children}
    </ShowBookContext.Provider>
  );
};

export default ShowBookContextProvider;
