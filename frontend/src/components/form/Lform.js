import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Lform.css';


function LForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

const navigate = useNavigate();

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
    console.log('Form submitted successfully:', formData);

    try {
      const response = await axios.post('http://localhost:4000/login', {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', response.data.token);
      if (response.status === 200) {
        console.log('Form submitted:', response.data);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } else {
        alert('Wrong Credentials');
        console.error('Error:', response.data);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Error during form submission:');
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
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
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
            {/* {errors.password && <span className="error">{errors.password}</span>} */}
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
