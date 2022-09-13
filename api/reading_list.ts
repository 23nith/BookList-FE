import { IListItem } from "../Interfaces/interfaces";
import React, { Dispatch, SetStateAction } from "react";

export interface IReadingListProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setReadingList: IListItem[];
}
export const fetchReadingList = ({
  setIsLoading,
  setReadingList,
}: IReadingListProps) => {
  setIsLoading(true);
  fetch("http://localhost:3000/api/v1/reading_list", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
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
