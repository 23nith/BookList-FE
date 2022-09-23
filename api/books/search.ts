import { authHeaders, baseUrl } from "../base";
import { IBook } from "../types";

export const search = (
  values: { query: string },
  onComplete: (books: IBook[]) => void
) => {
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
      onComplete(data);
    });
};
