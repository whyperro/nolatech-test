import React from "react";
import "./staff.css";
import Pic5 from "../../../assets/Pic5.png";
const Staff = () => {
  return (
    <section className="staff-section">
      <div className="staff-text">
        <p className="staff-title">Lorem ipsum dolor sit amet, consetetur</p>
        <button className="staff-btn">LOREM IPSUM DOLOR SIT</button>
        <button className="staff-btn2">LOREM IPSUM DOLOR SIT AMET</button>
      </div>
      <img src={Pic5} alt="Imagen de staff" className="staff-img" />
    </section>
  );
};

export default Staff;
