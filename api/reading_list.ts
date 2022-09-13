import { IListItem } from "../Interfaces/interfaces";
import { Dispatch, SetStateAction } from "react";
import { authHeaders, baseUrl } from "./base";

export interface IReadingListProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setReadingList: IListItem[];
}
export const fetchReadingList = ({
  setIsLoading,
  setReadingList,
}: IReadingListProps) => {
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
      setReadingList(data);
      return data;
    });
};
