import { authHeaders, baseUrl } from "./base";
import { Dispatch, SetStateAction } from "react";
import { User } from "./types";

export const setCurrentUser = (setUser: Dispatch<SetStateAction<User>>) => {
  fetch(`${baseUrl()}/api/v1/current_user`, {
    method: "get",
    headers: { ...authHeaders() },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setUser(data);
    });
};
