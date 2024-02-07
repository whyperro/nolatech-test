import React from "react";
import "./join-us.css";
import JoinUsBg from "../../../assets/JoinUsBg.png";
import JoinUsForm from "./JoinUsForm";
const JoinUs = () => {
  return (
    <section className="join-us-section">
      <img src={JoinUsBg} alt="Unete a nosotros" className="join-us-img" />
      <div className="join-us-form">
        <JoinUsForm />
      </div>
    </section>
  );
};

export default JoinUs;
