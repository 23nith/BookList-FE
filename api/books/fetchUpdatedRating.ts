import { authHeaders, baseUrl } from "../base";

export const fetchUpdatedRating = (
  id: number,
  onComplete: (rating: number) => void
) => {
  fetch(`${baseUrl()}/api/v1/list_item`, {
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
      onComplete(data.rating);
    });
};
