import React from "react";
import { authHeaders, baseUrl } from "./base";
import { IBook } from "./types";

interface booksProps {
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const fetchbooks = ({ setBooks }: booksProps) => {
  fetch(`${baseUrl()}/api/v1/books`, {
    method: "get",
    headers: { ...authHeaders() },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBooks(data);
    });
};
