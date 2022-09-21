import { authHeaders, baseUrl } from "./base";

export const addToReadingList = (
  bookID: number,
  userID: number,
  onComplete: () => void
) => {
  let now = new Date();
  let utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  fetch(`${baseUrl()}/api/v1/add_list_item`, {
    method: "post",
    headers: { ...authHeaders() },
    body: {
      book_id: bookID,
      user_id: userID,
      rating: 0,
      notes: "",
      start_date: utc,
      finish_date: null,
      created_at: "",
      updated_at: "",
    },
  }).then((res) => {
    if (res.ok) {
      onComplete && onComplete(res);
      return res.json();
    } else {
      return res.json();
    }
  });
};
