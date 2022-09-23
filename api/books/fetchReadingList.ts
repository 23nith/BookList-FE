import { Dispatch, SetStateAction } from "react";
import { authHeaders, baseUrl } from "../base";

export const fetchReadingList = (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  onComplete: () => void
) => {
  setIsLoading(true);
  fetch(`${baseUrl()}/api/v1/reading_list`, {
    method: "get",
    headers: { ...authHeaders() },
  })
    .then((res) => {
      setIsLoading(false);
      return res.json();
    })
    .then((data) => {
      onComplete(data);
    });
};
