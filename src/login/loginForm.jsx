import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the login with the email and password
    console.log('Submitted:', { email, password });
    // Here you could send the data to your backend or perform other actions
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="input-group mb-3">
            <label htmlFor="emailInput" className="input-group-text">Email</label>
            <input 
              className="form-control" 
              type="email" 
              placeholder="youremail@example.com" 
              id="emailInput" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="input-group mb-3">
            <label htmlFor="passwordInput" className="input-group-text">Password</label>
            <input 
              className="form-control" 
              type="password" 
              placeholder="make it good" 
              id="passwordInput" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </form>
  );
}
