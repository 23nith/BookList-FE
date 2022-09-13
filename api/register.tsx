export const register = (
  formData: React.FormEvent<HTMLInputElement>,
  onComplete: () => void
) => {
  fetch("http://localhost:3000/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      user: {
        username: formData.username,
        password: formData.password,
      },
    }),
  })
    .then((res) => {
      if (res.ok) {
        onComplete && onComplete(res);
        return res.json();
      }
    })
    .then((data) => {
      return data;
    });
};
