import { baseUrl } from "../base";
import { FormValues } from "../types";

export const login = (
  formData: FormValues,
  onComplete: () => void,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onFail: () => void
) => {
  setIsLoading(true);
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
    setIsLoading(false);
    if (res.ok) {
      onComplete && onComplete(res);
      localStorage.setItem("token", res.headers.get("Authorization"));
    } else {
      onFail();
    }
  });
};
