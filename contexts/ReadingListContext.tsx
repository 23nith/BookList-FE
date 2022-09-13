import React, { createContext, useState } from "react";
import { fetchReadingList } from "../api/reading_list";

export const ReadingListContext = createContext();

function ReadingListProvider(props) {
  const [readingList, setReadingList] = useState([]);

  return (
    <ReadingListContext.Provider value={{ readingList, setReadingList }}>
      {props.children}
    </ReadingListContext.Provider>
  );
}

export default ReadingListProvider;
