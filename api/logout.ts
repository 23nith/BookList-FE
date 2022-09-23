import { authHeaders, baseUrl } from "./base";

export const logout = () => {
  fetch(`${baseUrl()}/logout`, {
    method: "delete",
    headers: { ...authHeaders() },
  }).then((res) => {
    return res.json();
  });
};
