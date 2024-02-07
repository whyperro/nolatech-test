import React from "react";
import "./herofooter.css";
const HeroFooter = () => {
  return (
    <div className="hero-footer">
      <div className="footer-text">
        <p className="footer-text">Lorem ipsum dolor sit amet, consetetur</p>
      </div>
      <div className="footer-time">
        <div className="time-box">
          <span className="time-title">170</span>
          <span className="time-subtitle">days</span>
        </div>
        <hr />
        <div className="time-box">
          <span className="time-title">13</span>
          <span className="time-subtitle">Hours</span>
        </div>
        <hr />
        <div className="time-box">
          <span className="time-title">39</span>
          <span className="time-subtitle">Minutes</span>
        </div>
        <hr className="divider" />
        <div className="time-box">
          <span className="time-title">29</span>
          <span className="time-subtitle">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
