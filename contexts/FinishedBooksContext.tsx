import React, { createContext, useState } from "react";

export const FinishedBooks = createContext();

const FinishedBooksProvider = (props) => {
  const [finishedBooks, setFinishedBooks] = useState([]);

  return (
    <FinishedBooks.Provider value={{ finishedBooks, setFinishedBooks }}>
      {props.children}
    </FinishedBooks.Provider>
  );
};

export default FinishedBooksProvider;
