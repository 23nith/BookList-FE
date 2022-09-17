import { authHeaders, baseUrl } from "./base";
import { ListItem } from "./types";

export const addToFinishedList = (
  list: ListItem,
  bookID: number,
  userID: number,
  onComplete: () => void
) => {
  let now = new Date();
  let utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

  fetch(`${baseUrl()}/api/v1/edit_list_item`, {
    method: "post",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      id: list.id,
      book_id: bookID,
      user_id: userID,
      rating: list.rating,
      notes: list.notes,
      start_date: list.start_date,
      finish_date: utc,
      book: list.book,
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
