export const login = (formData: FormValues) => {
  fetch("http://localhost:3000/login", {
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
      localStorage.setItem("token", res.headers.get("Authorization"));
    } else {
      throw new Error(res);
    }
  });
};
