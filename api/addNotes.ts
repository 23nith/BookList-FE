import { authHeaders, baseUrl } from "./base";
import { ListItem } from "./types";

export const addNotes = (notes: string, list: ListItem) => {
  fetch(`${baseUrl()}/api/v1/list_item/${list.id}`, {
    method: "PATCH",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      list_item: { notes: notes },
    }),
  }).then((res) => {
    return res.json();
  });
};
