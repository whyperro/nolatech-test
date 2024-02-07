import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-menu">
      <i className="fa-brands fa-facebook side-menu-icon"></i>
      <i className="fa-brands fa-twitter side-menu-icon"></i>
      <i className="fa-brands fa-instagram side-menu-icon"></i>
      <i className="fa-brands fa-youtube side-menu-icon"></i>
      <i className="fa-brands fa-tiktok side-menu-icon"></i>
    </div>
  );
};

export default Sidebar;
