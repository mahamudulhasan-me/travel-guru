import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";

const MyRating = ({ ratingNum }) => {
  const [rating, setRating] = useState(ratingNum);
  return (
    <Rating style={{ maxWidth: 180 }} value={rating} onChange={setRating} />
  );
};

export default MyRating;
