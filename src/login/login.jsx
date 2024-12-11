import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginForm } from './loginForm';

export function Login() {
    return (
        <main className="bg-light d-flex flex-column container-fluid text-center">
            <div>
                <h1>Welcome to PassPhrase</h1>
                <p>Logging in to PassPhrase will count each password you generate toward your place on the leaderboard!</p>
                <LoginForm />
              </div>
              <p className="m-3">Don't have an account? <NavLink className="btn btn-sm btn-outline-primary" to="newUser">Sign up here</NavLink> </p>
        </main>
    );
}