import React from 'react';
import "./home.css";
import { StrengthTester } from './strengthTester';
import { PasswordGeneratorCard } from './passwordGeneratorCard';

export function Home() {
    return (
        <main className="bg-lightbg-lightcolumn container-fluid text-center" display="flex-column">
        <div className="row justify-content-evenly">
            <section className="card bg-primary shadow-lg col-5 border border-2 border-secondary" id='cards'>
                <div className="card-body">
                    <h3 className="card-title">Test Your Password Strength!</h3>
                    <div className="row justify-content-center">
                        <StrengthTester />
                    </div>
                </div>
            </section>
            <section className="card bg-primary shadow-lg col-5 border border-secondary border-2" id='cards'>
                <PasswordGeneratorCard />
            </section>
            
        </div>
    </main>
    );
}