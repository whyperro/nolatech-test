import React, { useState } from "react";
import Pic1 from "../../../assets/Pic1.png";
import Pic2 from "../../../assets/Pic2.png";
import Pic3 from "../../../assets/Pic3.png";
import Pic4 from "../../../assets/Pic4.png";
import Pic7 from "../../../assets/Pic7.png";
import Pic8 from "../../../assets/Pic8.png";
import Pic10 from "../../../assets/Pic10.png";
import "./carousel.css";

export const Carousel = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const imageSets = [
    [Pic7, Pic8, Pic4],
    [Pic4, Pic7, Pic10],
    [Pic7, Pic8, Pic4],
  ];

  const nextSet = () => {
    setCurrentSetIndex(
      currentSetIndex === imageSets.length - 1 ? 0 : currentSetIndex + 1
    );
  };

  const prevSet = () => {
    setCurrentSetIndex(
      currentSetIndex === 0 ? imageSets.length - 1 : currentSetIndex - 1
    );
  };

  const renderImages = () => {
    return imageSets[currentSetIndex].map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        className="carousel-image"
      />
    ));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">{renderImages()}</div>
      <div className="carousel-controls">
        <i
          onClick={() => setCurrentSetIndex(0)}
          className={`fa-solid fa-circle ${
            currentSetIndex === 0 ? "active" : ""
          }`}
        ></i>
        <i
          onClick={() => setCurrentSetIndex(1)}
          className={`fa-solid fa-circle ${
            currentSetIndex === 1 ? "active" : ""
          }`}
        ></i>
        <i
          onClick={() => setCurrentSetIndex(2)}
          className={`fa-solid fa-circle ${
            currentSetIndex === 2 ? "active" : ""
          }`}
        ></i>
      </div>
    </div>
  );
};
