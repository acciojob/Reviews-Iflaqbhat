import React, { useState } from "react";
import reviews from "./Data.js"; // assuming review data is imported from a file

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const nextReview = () => setIndex((index + 1) % reviews.length);
  const prevReview = () =>
    setIndex((index - 1 + reviews.length) % reviews.length);

  const randomReview = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <div className="review">
      <img src={image} alt={name} className="person-img" />
      <h2 id={`author-${id}`} className="author">
        {name}
      </h2>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
      <div>
        <button onClick={prevReview} className="prev-btn">
          Previous
        </button>
        <button onClick={nextReview} className="next-btn">
          Next
        </button>
      </div>
      <button onClick={randomReview} className="random-btn">
        Surprise Me
      </button>
    </div>
  );
};

export default Review;
