import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextType {
  previousPage: string;
  setPreviousPage: Dispatch<SetStateAction<string>>;
}

export const ShowBookPageContext = createContext<ContextType>({});

interface ShowBookPageContextProviderProps {
  children: ReactNode;
}

const ShowBookPageContextProvider = ({
  children,
}: ShowBookPageContextProviderProps) => {
  const [previousPage, setPreviousPage] = useState<string>("");
  const value: ContextType = {
    previousPage,
    setPreviousPage,
  };
  return (
    <ShowBookPageContext.Provider value={value}>
      {children}
    </ShowBookPageContext.Provider>
  );
};

export default ShowBookPageContextProvider;
