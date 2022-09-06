import React, { createContext, useState } from "react";

export const FinishedBooks = createContext();

const FinishedBooksProvider = (props) => {
  const [finishedBooks, setFinishedBooks] = useState([]);
  const fetchFinishedBooks = () => {
    fetch("http://localhost:3000/api/v1/finished_books", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFinishedBooks(data);
        return data;
      });
  };

  return (
    <FinishedBooks.Provider
      value={{ finishedBooks, setFinishedBooks, fetchFinishedBooks }}
    >
      {props.children}
    </FinishedBooks.Provider>
  );
};

export { FinishedBooksProvider };
