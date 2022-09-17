import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { fetchReadingList } from "../api/fetchReadingList";
import { ListItem } from "../api/types";

interface ContextType {
  readingList: ListItem[];
  setReadingList: Dispatch<SetStateAction<ListItem[]>>;
  isLoading: boolean;
  resetReadingList: (data: ListItem[]) => void;
}

export const ReadingListContext = createContext<ContextType>({});

interface ReadingListProviderProps {
  children: ReactNode;
}

const ReadingListProvider = ({ children }: ReadingListProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [readingList, setReadingList] = useState<ListItem[]>([]);

  const onComplete = (data: ListItem[]) => {
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

  const value: ContextType = {
    readingList,
    setReadingList,
    isLoading,
    resetReadingList,
  };

  return (
    <ReadingListContext.Provider value={value}>
      {children}
    </ReadingListContext.Provider>
  );
};

export default ReadingListProvider;
