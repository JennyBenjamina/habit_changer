import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    username: '',
    password1: '',
    password2: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:8000/register', {
      formData,
    });

    const success = response.status === 200;

    if (success) {
      Navigate('/');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="registration-container">
      Registration
      <div className="registration-inner">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={FormData.fname}
            onChange={handleChange}
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={FormData.lname}
            onChange={handleChange}
          />
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            id="password1"
            name="password1"
            value={FormData.password1}
            onChange={handleChange}
          />
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={FormData.password2}
            onChange={handleChange}
          />

          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            value={FormData.username}
            onChange={handleChange}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Registration;
