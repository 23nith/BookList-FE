import { authHeaders, baseUrl } from "./base";
import { IBook } from "./types";

interface SearchProps {
  query: string;
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const search = ({ values, setBooks }: SearchProps) => {
  fetch(`${baseUrl()}/api/v1/search`, {
    method: "post",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      book: {
        query: values.query,
      },
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBooks(data);
    });
};
