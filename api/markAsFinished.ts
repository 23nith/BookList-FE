import { authHeaders, baseUrl } from "./base";
import { ListItem } from "./types";

export const markAsFinished = (list: ListItem, onComplete: () => void) => {
  let now = new Date();
  let utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

  fetch(`${baseUrl()}/api/v1/list_item/${list.id}`, {
    method: "PATCH",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      list_item: { finish_date: utc },
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
