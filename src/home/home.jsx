import React from 'react';

export function Home() {
    return (
        <main class="bg-light d-flex flex-column container-fluid text-center" display="flex-column">
        <div class="row justify-content-evenly">
            <section class="card col-5 bg-primary border border-2 border-dark" style="--bs-bg-opacity: .60;">
                <div class="card-body">
                    <h3 class="card-title">Test Your Password Strength!</h3>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <input class="form-control my-3" type="text" placeholder="Your Password Here" id="passwordTester" />
                        </div>
                        <p>Password Strength: <em style="color:rgb(253, 232, 0)" class="fwt-bold">Good</em></p>
                        <p>Time to Crack: 3 hours</p>
                    </div>
                </div>
            </section>
            <section class="card shadow-lg col-5 border border-secondary border-2">
                <div class="card-body">
                    <h3 class="card-title">Generate a Passphrase</h3>
                    <div><button class="btn btn-primary">Generate</button></div>
                    <div class="card-text">Memory Tip: ....</div>
                </div>
            </section>
            
        </div>
    </main>
    );
}