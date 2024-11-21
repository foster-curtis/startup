import React from 'react';
import "./home.css";

export function Home() {
    return (
        <main className="bg-light d-flex flex-column container-fluid text-center" display="flex-column">
        <div className="row justify-content-evenly">
            <section className="card col-5 bg-primary border border-2 border-dark" >
                <div className="card-body">
                    <h3 className="card-title">Test Your Password Strength!</h3>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <input className="form-control my-3" type="text" placeholder="Your Password Here" id="passwordTester" />
                        </div>
                        <p>Password Strength: <em className="fwt-bold">Good</em></p>
                        <p>Time to Crack: 3 hours</p>
                    </div>
                </div>
            </section>
            <section className="card shadow-lg col-5 border border-secondary border-2">
                <div className="card-body">
                    <h3 className="card-title">Generate a Passphrase</h3>
                    <div><button className="btn btn-primary">Generate</button></div>
                    <div className="card-text">Memory Tip: ....</div>
                </div>
            </section>
            
        </div>
    </main>
    );
}