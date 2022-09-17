import { ListItem } from "./types";
import { authHeaders, baseUrl } from "./base";

export interface IFinishedBooksProps {
  setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>;
  onComplete: () => void;
}

export const fetchFinishedBooks = (
  setIsLoading: boolean,
  setFinishedBooks: () => void
) => {
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
