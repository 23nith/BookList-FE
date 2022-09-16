import { authHeaders, baseUrl } from "./base";
import { User } from "./types";

export const setCurrentUser = (onComplete: (user: User) => void) => {
  fetch(`${baseUrl()}/api/v1/current_user`, {
    method: "get",
    headers: { ...authHeaders() },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      onComplete(data);
    });
};
