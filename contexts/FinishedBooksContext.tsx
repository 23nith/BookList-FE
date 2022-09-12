import React, { createContext, useState } from "react";
import { fetchFinishedBooks } from "../api/finished_books";

export const FinishedBooks = createContext();

const FinishedBooksProvider = (props) => {
  const [finishedBooks, setFinishedBooks] = useState([]);
  fetchFinishedBooks(setIsLoading, setFinishedBooks);

  return (
    <FinishedBooks.Provider
      value={{ finishedBooks, setFinishedBooks, fetchFinishedBooks }}
    >
      {props.children}
    </FinishedBooks.Provider>
  );
};

export default FinishedBooksProvider;
