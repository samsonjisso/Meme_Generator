import { useState } from "react";
import "./Form.css";

export default function AppForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });
  const handleChange = (event) => {
    console.log(event.target.name);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <div className="form">
      <input
        className="form--first"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <br />
      <input
        className="form--last"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <br />
      <input
        className="form--email"
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <br />
      <textarea
        value={formData.comment}
        placeholder="Comments"
        onChange={handleChange}
        name="comment"
      />
    </div>
  );
}
