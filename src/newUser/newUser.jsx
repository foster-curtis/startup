import React from 'react';

export function NewUser() {
    return (
        <main className="bg-light d-flex flex-column container-fluid text-center">
            <form method="get" action="homePage.html">
                <legend className="mb-5"><h1>Create New User</h1></legend>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="input-group row mb-3">
                            <span className="col-3 input-group-text">Email</span>
                            <input className="col-9 form-control" type="email" placeholder="email@example.com" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="input-group row mb-3">
                            <span className="col-3 input-group-text">Password</span>
                            <input className="col-9 form-control" type="password" placeholder="Passwords here" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="input-group row mb-3">
                            <span className="col-3 input-group-text">Confirm Password</span>
                            <input className="col-9 form-control" type="password" placeholder="Don't mess up" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Create Account</button>
                </div>
                <div className="m-4">Logging in to PassPhrase will count each password you generate toward your place on the leaderboard!</div>
            </form>
        </main>
    );Name
}