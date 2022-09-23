import React from "react";
import { authHeaders, baseUrl } from "../base";
import { IBook } from "../types";

export const fetchBooks = (onComplete: (books: IBook[]) => void) => {
  fetch(`${baseUrl()}/api/v1/books`, {
    method: "get",
    headers: { ...authHeaders() },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      onComplete(data);
    });
};
