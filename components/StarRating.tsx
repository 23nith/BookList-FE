import React, { useState, useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { setRating as setScore } from "../api/setRating";
import { FinishedBooks } from "../contexts/FinishedBooksContext";
import { fetchUpdatedRating } from "../api/fetchUpdatedRating";
import { ListItem } from "../api/types";

interface StarRatingProps {
  list: ListItem;
  id: number;
}

export const StarRating = ({ list, id }: StarRatingProps) => {
  const [rating, setRating] = useState<number>(list.rating);
  const [hover, setHover] = useState<number | null>(null);
  const { finishedBooks } = useContext(FinishedBooks);

  const handleOnClick = (ratingValue: number) => {
    setScore(id || list.id, ratingValue);
    setRating(ratingValue);
  };

  useEffect(() => {
    setRating(list.rating);
  }, [list, fetchUpdatedRating, finishedBooks]);

  const stopBubbling = (e: React.SyntheticEvent<EventTarget>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={stopBubbling}>
      {[...Array(5)].map((star, i) => {
        const ratingValue: number = i + 1;
        return (
          <label>
            <input
              type="radio"
              className="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                handleOnClick(ratingValue);
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};
