import { baseUrl, authHeaders } from "../base";

export const register = (
  formData: React.FormEvent<HTMLInputElement>,
  onComplete: () => void,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onFail: () => void
) => {
  setIsLoading(true);
  fetch(`${baseUrl()}/signup`, {
    method: "post",
    headers: { ...authHeaders() },
    body: JSON.stringify({
      user: {
        username: formData.username,
        password: formData.password,
      },
    }),
  })
    .then((res) => {
      setIsLoading(false);
      if (res.ok) {
        onComplete && onComplete(res);
        return res.json();
      } else {
        onFail();
      }
    })
    .then((data) => {
      return data;
    });
};
