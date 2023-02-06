import Login from '../components/Login';
import axios from 'axios';
import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8000', { formData });

    const success = response.status == 200;
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
    <div className="login">
      <h1>Login</h1>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={handleChange}
              required={true}
              value={formData.username}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              required={true}
              value={formData.password}
            />

            <input type="submit" />
          </section>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
