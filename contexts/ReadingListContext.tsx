import React, { createContext, useState, useEffect } from "react";
import { fetchReadingList } from "../api/fetchReadingList";

export const ReadingListContext = createContext();

function ReadingListProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [readingList, setReadingList] = useState([]);

  const onComplete = (data) => {
    setReadingList(data);
  };

  useEffect(() => {
    if (readingList.length == 0) {
      fetchReadingList({ setIsLoading, setReadingList, onComplete });
    }
  }, []);

  const resetReadingList = () => {
    fetchReadingList({ setIsLoading, setReadingList, onComplete });
  };

  return (
    <ReadingListContext.Provider
      value={{ readingList, setReadingList, isLoading, resetReadingList }}
    >
      {props.children}
    </ReadingListContext.Provider>
  );
}

export default ReadingListProvider;
