import { authHeaders, baseUrl } from "./base";

export const addNotes = (
  notes: string,
  bookID: number,
  userID: number,
  onComplete: () => void
) => {
  fetch(`${baseUrl()}/api/v1/edit_list_item`, {
    method: "post"
    headers: { ...authHeaders()},
    body: JSON.stringify({
      book_id: bookID,
      user_id: userID,
      rating: 0,
      notes: notes,
      start_date: "",
      finish_date: null,
      created_at: "",
      updated_at: "",
    })
  }).then((res) => {
    if (res.ok) {
      onComplete && onComplete(res);
      return res.json();
    } else {
      return res.json();
    }
  });
};
