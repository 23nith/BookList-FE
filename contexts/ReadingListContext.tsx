import React, { createContext, useState } from "react";

export const ReadingListContext = createContext();

function ReadingListProvider(props) {
  const [readingList, setReadingList] = useState([]);
  const fetchReadingList = () => {
    fetch("http://localhost:3000/api/v1/reading_list", {
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
        setReadingList(data);
        return data;
      });
  };

  return (
    <ReadingListContext.Provider
      value={{ readingList, setReadingList, fetchReadingList }}
    >
      {props.children}
    </ReadingListContext.Provider>
  );
}

export default ReadingListProvider;
