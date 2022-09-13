const authHeaders = () => {
  const authKey = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: authKey,
  };
};

const baseUrl = () => {
  return process.env.NEXT_PUBLIC_API_PATH;
};

export { authHeaders, baseUrl };
