import { authHeaders, baseUrl } from "../base";

export const removeFromReadingList = (
  listID: number,
  onComplete: () => void
) => {
  fetch(`${baseUrl()}/api/v1/list_item`, {
    method: "delete",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      id: listID,
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
