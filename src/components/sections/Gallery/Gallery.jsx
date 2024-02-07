import React from "react";
import "./gallery.css";
import { Carousel } from "./Carousel";

export const Gallery = () => {
  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Lorem Ipsum</h1>
      <Carousel />
      <button className="gallery-btn">VIEW ALL</button>
    </section>
  );
};
