import { baseUrl } from "./base";
import { FormValues } from "./types";

export const login = (formData: FormValues, onComplete: () => void) => {
  fetch(`${baseUrl()}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: formData.username,
        password: formData.password,
      },
    }),
  }).then((res) => {
    if (res.ok) {
      onComplete && onComplete(res);
      localStorage.setItem("token", res.headers.get("Authorization"));
    } else {
      return res;
    }
  });
};
