import React, { useState, useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import { setRating as setScore } from "../api/setRating";
import { FinishedBooks } from "../contexts/FinishedBooksContext";

export const StarRating = ({ list }) => {
  const [rating, setRating] = useState(list.rating);
  const [hover, setHover] = useState(null);
  const { finishedBooks } = useContext(FinishedBooks);

  const handleOnClick = (ratingValue) => {
    setScore(list, ratingValue);
    setRating(ratingValue);
  };

  useEffect(() => {
    setRating(list.rating);
  }, [finishedBooks]);

  const stopBubbling = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={stopBubbling}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              className={styles.radio}
              name="rating"
              value={ratingValue}
              onClick={() => {
                handleOnClick(ratingValue);
              }}
            />
            <FaStar
              className={styles.star}
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
