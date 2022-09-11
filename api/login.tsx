import { useRouter } from "next/router";

export const login = (formData: FormValues) => {
  // setIsLoading(true);
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
      router.push("/list");
    } else {
      throw new Error(res);
    }
    // setIsLoading(false);
  });
};
