import { authHeaders, baseUrl } from "./base";

export const fetchBook = (id, setBook) => {
  fetch(`${baseUrl}/api/v1/book`, {
    method: "post",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBook(data);
    });
};
