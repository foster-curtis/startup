import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { NewUser } from './newUser/newUser';
import { Home } from './home/home';
import { Leaderboard } from './leaderboard/leaderboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <BrowserRouter>
            <header className="bg-primary container-fluid">
                <nav className="navbar navbar-expand-sm bg-primary fixed-top">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="home"><b>PassPhrase</b></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to=''>Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="leaderboard">Leaderboard</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/newUser' element={<NewUser />} />
                <Route path='/home' element={<Home />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        
            <footer className="bg-dark text-white-50 fixed-bottom p-3">
                <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <span className="text-reset">Author: Foster Curtis</span>
                    </div>
                    <div className="col text-end">
                        <a className="text-reset" href="https://github.com/foster-curtis/startup/tree/main">My Public GitHub Repo</a>
                    </div>
                </div>
                </div>
            </footer>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }