import { IListItem } from "../Interfaces/interfaces";
import { authHeaders, baseUrl } from "./base";

export interface IFinishedBooksProps {
  setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>;
  setFinishedBooks: IListItem[];
}

export const fetchFinishedBooks = ({
  setIsLoading,
  setFinishedBooks,
}: IFinishedBooksProps): Promise<IListItem[]> => {
  setIsLoading(true);
  console.log("path: ", process.env.NEXT_PUBLIC_API_PATH);
  fetch(`${baseUrl()}/api/v1/finished_books`, {
    method: "get",
    headers: { ...authHeaders() },
  })
    .then((res) => {
      setIsLoading(false);
      return res.json();
    })
    .then((data) => {
      setFinishedBooks(data);
      return data;
    });
};
