import { IListItem } from "../Interfaces/interfaces";

export interface IFinishedBooksProps {
  setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>;
  setFinishedBooks: Array<IListItem>;
}

export const fetchFinishedBooks = ({
  setIsLoading,
  setFinishedBooks,
}: IFinishedBooksProps) => {
  setIsLoading(true);
  fetch("http://localhost:3000/api/v1/finished_books", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
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
