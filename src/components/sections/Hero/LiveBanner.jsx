import React from "react";
import "./livebanner.css";
const LiveBanner = () => {
  return (
    <div className="live-banner">
      <span className="isLive">
        Live &nbsp;&nbsp;<i className="fa-solid fa-satellite-dish"></i>
      </span>
      <span className="center-text"> Lorem ipsu dolor sit amet </span>
      <span className="isJoin">
        {" "}
        Join Now &nbsp;&nbsp;<i className="fa-solid fa-circle-play"></i>
      </span>
    </div>
  );
};

export default LiveBanner;
