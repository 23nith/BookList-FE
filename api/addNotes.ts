import { authHeaders, baseUrl } from "./base";
import { ListItem } from "./types";

export const addNotes = (notes: string, list: ListItem) => {
  fetch(`${baseUrl()}/api/v1/edit_list_item`, {
    method: "post",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      id: list.id,
      book_id: list.book.id,
      user_id: list.user_id,
      rating: list.rating,
      notes: notes,
      start_date: list.start_date,
      finish_date: list.finish_date,
    }),
  }).then((res) => {
    return res.json();
  });
};
