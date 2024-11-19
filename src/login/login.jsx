import React from 'react';

export function Login() {
    return (
        <main class="bg-light d-flex flex-column container-fluid text-center">
            <div>
                <h1>Welcome to PassPhrase</h1>
                <p>Logging in to PassPhrase will count each password you generate toward your place on the leaderboard!</p>
                <form method="get" action="homePage.html">
                  <div class="row justify-content-center">
                    <div class="col-md-3">
                      <div class="input-group mb-3">
                        <label for="emailInput" class="input-group-text">Email</label>
                        <input class="form-control" type="email" placeholder="youremail@example.com" id="emailInput" />
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-3">
                      <div class="input-group mb-3">
                        <label for="passwordInput" class="input-group-text">Password</label>
                        <input class="form-control" type="password" placeholder="make it good" id="passwordInput"/>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-3">
                      <button type="submit" class="btn btn-primary w-100">Login</button>
                    </div>
                  </div>                
                </form>
              </div>
              <p class="m-3">Don't have an account? <a class="btn btn-sm btn-outline-primary" href="newUser.html">Sign up here</a></p>
        </main>
    );
}