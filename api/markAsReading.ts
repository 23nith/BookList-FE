import { authHeaders, baseUrl } from "./base";

export const markAsReading = (
  list: ListItem,
  bookID: number,
  userID: number,
  onComplete: () => void
) => {
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
