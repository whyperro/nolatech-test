import React, { useState } from "react";
import "./join-us-form.css";

function JoinUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    department: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 className="form-title">JOIN US</h1>
      <h1 className="form-subtitle">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      </h1>
      <form className="" onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            className="inputForm"
            placeholder="Name"
            style={{ marginRight: 0, width: "100%" }}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="inputForm"
            placeholder="Username"
            style={{ width: "100%" }}
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            className="inputForm"
            placeholder="Phone"
            style={{ marginRight: 0, width: "100%" }}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            className="inputForm"
            placeholder="Email"
            style={{ width: "100%" }}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            className="inputForm"
            placeholder="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
          <textarea
            className="inputForm"
            placeholder="Message"
            style={{ height: 120, paddingTop: 16 }}
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="form-btn">
          IM IN
        </button>
      </form>
      <p className="form-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </p>
    </>
  );
}

export default JoinUsForm;
