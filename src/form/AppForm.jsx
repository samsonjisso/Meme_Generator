import { useState } from "react";
import "./Form.css"

export default function AppForm() { 
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: ""
    })
    const handleChange = (event) => {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
        [event.target.name]: event.target.value
        }
      })
    }
  return (
    <div className="form">
      <input className="form--first" type="text" placeholder="First Name" onChange={handleChange} name="firstName"/>
      <input className="form--last" type="text" placeholder="Last Name" onChange={handleChange} name="lastName"/>
      <input className="form--email" type="text" placeholder="email" onChange={handleChange} name="email"/>
    </div>
  );
}
