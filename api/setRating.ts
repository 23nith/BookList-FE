import { authHeaders, baseUrl } from "./base";

export const setRating = (list, rating) => {
  fetch(`${baseUrl()}/api/v1/list_item/${list.id}`, {
    method: "PATCH",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      list_item: { rating: rating },
    }),
  }).then((res) => {
    return res.json();
  });
};
