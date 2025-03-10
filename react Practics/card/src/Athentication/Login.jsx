
// LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate , useParams } from 'react-router-dom';
import NavBar from '../Includes/NavBar.jsx'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 const navigate = useNavigate();
 const {name} = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    navigate('/')
    // Handle login logic here
    console.log('Logging in:', username, password);
    setError('');
  };

  return (
<>
<NavBar />
    <div className="login-form-container">
      
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p> your name {name} </p>
    </div>
    
    </>
  );
};

export default Login;
