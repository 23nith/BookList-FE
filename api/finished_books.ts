import { ListItem } from "./types";
import { authHeaders, baseUrl } from "./base";

export interface IFinishedBooksProps {
  setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>;
  setFinishedBooks: ListItem[];
}

export const fetchFinishedBooks = ({
  setIsLoading,
  setFinishedBooks,
}: IFinishedBooksProps): Promise<ListItem[]> => {
  setIsLoading(true);
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
