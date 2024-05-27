import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    
    <div className="App">
      <h1 className='spirit'>SPIRIT</h1>
      <form onSubmit={handleSubmit}>
          <div class="underline-container">
           <p class="underline-text">SignUp</p>
           <hr class="underline"/>
           </div>
  
         <div className="row">
          <div className="col">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>College Name</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="others">
         <a href="" className="Done">Done</a>
          <a className='cancel'
            href="">cancel</a>
        </div>
       
      </form>
    </div>
  );
}

export default Form;
