import React, { createContext, useState } from "react";
import { fetchReadingList } from "../api/reading_list";

export const ReadingListContext = createContext();

function ReadingListProvider(props) {
  const [readingList, setReadingList] = useState([]);
  fetchReadingList(setIsLoading, setReadingList);

  return (
    <ReadingListContext.Provider
      value={{ readingList, setReadingList, fetchReadingList }}
    >
      {props.children}
    </ReadingListContext.Provider>
  );
}

export default ReadingListProvider;
