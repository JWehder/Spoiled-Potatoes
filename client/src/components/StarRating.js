import { useState } from "react";

function StarRating() {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0)

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= (hoverRating || rating);
    stars.push(
      <span
        key={i}
        className={filled ? "filled" : ""}
        onMouseEnter={() => setHoverRating(i)}
        onMouseLeave={() => setHoverRating(0)}
        onClick={() => setRating(i)}
      >
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
}


export default StarRating;