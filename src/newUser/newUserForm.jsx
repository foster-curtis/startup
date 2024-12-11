import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function NewUserForm() {
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
                <legend className="mb-5"><h1>Create New User</h1></legend>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="input-group row mb-3">
                            <span className="col-3 input-group-text">Email</span>
                            <input
                              className="col-9 form-control"
                              type="email"
                              placeholder="email@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="input-group row mb-3">
                            <span className="col-3 input-group-text">Password</span>
                            <input
                              className="col-9 form-control"
                              type="password"
                              placeholder="Password here"
                            />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="input-group row mb-3">
                            <span className="col-3 input-group-text">Confirm Password</span>
                            <input
                              className="col-9 form-control"
                              type="password"
                              placeholder="Don't mess up"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Create Account</button>
                </div>
                <div className="m-4">Logging in to PassPhrase will count each password you generate toward your place on the leaderboard!</div>
            </form>
    );
}


