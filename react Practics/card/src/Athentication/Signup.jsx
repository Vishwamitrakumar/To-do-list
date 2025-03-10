import React, { useState } from "react";
import "./SignupForm.css";
import NavBar from '../Includes/NavBar.jsx'

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you could send the formData to your backend
    const response = await fetch('http://localhost:3000/signup' , {
      method :'POST',
      headers : {
        "Content-Type" : "application/json" , 
      },
      body : JSON.stringify(formData)
    });
    
  };

  return (<>
  <NavBar />
    <div className="form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
}

export default Signup
