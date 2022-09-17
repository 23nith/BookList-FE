import { authHeaders, baseUrl } from "./base";
import { ListItem } from "./types";

export const addToFinishedList = (
  list: ListItem,
  bookID: number,
  userID: number
) => {
  let today: Date | string = new Date();
  let dd: string = String(today.getDate()).padStart(2, "0");
  let mm: string = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy: number = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

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
      finish_date: today,
      book: list.book,
    }),
  }).then((res) => {
    return res.json();
  });
};
