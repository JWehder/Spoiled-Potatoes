import React from "react";

function DisabledStarRating({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= (rating);
      stars.push(
        <span
          key={i}
          className={filled ? "filled" : ""}
        >
          ★
        </span>
      );
    }
  
    return <div>{stars}</div>;
}

export default DisabledStarRating;