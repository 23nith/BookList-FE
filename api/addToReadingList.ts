import { authHeaders, baseUrl } from "./base";

export const addToReadingList = (
  bookID: number,
  userID: number,
  onComplete: () => void
) => {
  fetch(`${baseUrl()}/api/v1/add_list_item`, {
    method: "post",
    headers: { ...authHeaders() },
    body: {
      book_id: bookID,
      user_id: userID,
      rating: 0,
      notes: "",
      finish_date: null,
    }),

  }).then((res) => {
    if (res.ok) {
      onComplete && onComplete(res);
      return res.json();
    } else {
      return res.json();
    }
  });
};
