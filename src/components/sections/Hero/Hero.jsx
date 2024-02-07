import React from "react";
import LiveBanner from "./LiveBanner";
import Navbar from "./Navbar";
import Header from "../../../assets/Header.png";
import icongrab from "../../../assets/icongrab.png";
import "./hero.css";
import HeroFooter from "./HeroFooter";

const Hero = () => {
  return (
    <>
      <header>
        <LiveBanner />
      </header>
      <div className="nav">
        <img className="hero-image" src={Header} />
        <div className="container">
          <div className="main-hero">
            <img className="hero-logo" src={icongrab} />
            <div className="right-content">
              <Navbar />
              <div className="right-content-info">
                <div className="right-content-text">
                  <h1 className="right-title-text">LOREM IPSUM</h1>
                  <h1 className="alt-title-text">LOREM IPSUM DOLOR &nbsp;</h1>
                  <h1 className="right-title-text">LOREM IPSUM</h1>
                </div>
                <div className="btn">
                  <button className="hero-button">WHAT IS NEXT</button>
                </div>
              </div>
            </div>
          </div>
          <HeroFooter />
        </div>
      </div>
    </>
  );
};

export default Hero;
