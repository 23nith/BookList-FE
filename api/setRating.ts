import { authHeaders, baseUrl } from "./base";

export const setRating = (id: number, rating: number) => {
  fetch(`${baseUrl()}/api/v1/list_item/${id}`, {
    method: "PATCH",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      list_item: { rating: rating },
    }),
  }).then((res) => {
    return res.json();
  });
};
