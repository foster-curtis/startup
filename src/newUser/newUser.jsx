import React from 'react';

export function NewUser() {
    return (
        <main class="bg-light d-flex flex-column container-fluid text-center">
            <form method="get" action="homePage.html">
                <legend class="mb-5"><h1>Create New User</h1></legend>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <div class="input-group row mb-3">
                            <span class="col-3 input-group-text">Email</span>
                            <input class="col-9 form-control" type="email" placeholder="email@example.com" />
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <div class="input-group row mb-3">
                            <span class="col-3 input-group-text">Password</span>
                            <input class="col-9 form-control" type="password" placeholder="Passwords here" />
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6">
                        <div class="input-group row mb-3">
                            <span class="col-3 input-group-text">Confirm Password</span>
                            <input class="col-9 form-control" type="password" placeholder="Don't mess up" />
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary" type="submit">Create Account</button>
                </div>
                <div class="m-4">Logging in to PassPhrase will count each password you generate toward your place on the leaderboard!</div>
            </form>
        </main>
    );
}