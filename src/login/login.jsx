import React from 'react';

export function Login() {
    return (
        <main className="bg-light d-flex flex-column container-fluid text-center">Name
            <div>
                <h1>Welcome to PassPhrase</h1>
                <p>Logging in to PassPhrase will count each password you generate toward your place on the leaderboard!</p>
                <form method="get" action="homePage.html">
                  <div className="row justify-content-center">
                    <div className="col-md-3">
                      <div className="input-group mb-3">
                        <label for="emailInput" className="input-group-text">Email</label>
                        <input className="form-control" type="email" placeholder="youremail@example.com" id="emailInput" />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-3">
                      <div className="input-group mb-3">
                        <label for="passwordInput" className="input-group-text">Password</label>
                        <input className="form-control" type="password" placeholder="make it good" id="passwordInput"/>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-3">
                      <button type="submit" className="btn btn-primary w-100">Login</button>
                    </div>
                  </div>                
                </form>
              </div>
              <p className="m-3">Don't have an account? <Navlink className="btn btn-sm btn-outline-primary" to="newUser">Sign up here</Navlink> </p>
        </main>
    );
}