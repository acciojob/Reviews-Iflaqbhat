import React, { useState } from "react";

// Predefined review data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

function Review() {
  const [index, setIndex] = useState(0);

  // Destructure current review
  const { id, name, job, image, text } = reviews[index];

  // Go to the next review
  const nextReview = () => setIndex((index + 1) % reviews.length);

  // Go to the previous review
  const prevReview = () =>
    setIndex((index - 1 + reviews.length) % reviews.length);

  // Display a random review (avoiding the current one)
  const randomReview = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <article className="review">
      {/* Image */}
      <img src={image} alt={name} className="person-img" />

      {/* Author's Name */}
      <h4 id={`author-${id}`} className="author">
        {name}
      </h4>

      {/* Job */}
      <p className="job">{job}</p>

      {/* Review Text */}
      <p className="info">{text}</p>

      {/* Buttons */}
      <div>
        <button className="prev-btn" onClick={prevReview}>
          Previous
        </button>
        <button className="next-btn" onClick={nextReview}>
          Next
        </button>
      </div>

      {/* Random Review Button */}
      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </article>
  );
}

export default Review;
