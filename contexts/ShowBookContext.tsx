import React, { createContext, useState } from "react";
import { IBook } from "../api/types";

export const ShowBookContext = createContext();

const ShowBookContextProvider = ({ children }) => {
  const [book, setBook] = useState<IBook>({});
  return (
    <ShowBookContext.Provider value={{ book, setBook }}>
      {children}
    </ShowBookContext.Provider>
  );
};

export default ShowBookContextProvider;
