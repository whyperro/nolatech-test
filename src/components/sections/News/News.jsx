import React from "react";
import "./news.css";
import Pic6 from "../../../assets/Pic6.png";
const News = () => {
  return (
    <section className="news-section">
      <img src={Pic6} alt="Imagen de noticias" className="news-img" />
      <div className="news-container">
        <h1 className="news-title">Lorem ipsum</h1>
        <p className="news-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button className="news-btn">VIEW ALL</button>
      </div>
    </section>
  );
};

export default News;
