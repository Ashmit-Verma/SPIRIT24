import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { validate } from './validate';

function LForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(`Field changed: ${name}, Value: ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission attempted');
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      console.log('Validation errors found', validationErrors);
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted successfully:', formData);

    try {
      console.log("Hi");
      const response = await axios.post('http://localhost:4000/signup', {
        name: formData.name,
        email: formData.email,
        mobile: formData.contact,
        college: formData.college,
        password: formData.password,
      });
      if (response.status === 200) {
        alert('User registered successfully');
        console.log('Form submitted:', response.data);
      } else {
        alert('Error registering user');
        console.error('Error:', response.data);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className="App">
      <h1 className='spirit'>SPIRIT</h1>
      <form onSubmit={handleSubmit}>
        <div className="underline-container">
          <p className="underline-text">Login</p>
          <hr className="underline" />
        </div>

        <div className="row">
          <div className="col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
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
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
        </div>
        <div className="others">
          <button type="submit" className="Done">Continue</button>
          <a className='cancel' href="/">cancel</a>
          <small>Don't have an account? <a href="/signup">SignUp</a></small>
        </div>
      </form>
    </div>
  );
}

export default LForm;
