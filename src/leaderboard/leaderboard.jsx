import React from 'react';

export function Leaderboard() {
    return (
        <main className="bg-light d-flex flex-column container-fluid text-center">
                <div className="row justify-content-center">
                    <img src="/trophy-clipart.png" alt="trophy" id="trophy"/>
                    <h1 className="text-primary mb-2">Leaderboard</h1>
                    <h3 className="text-secondary mb-3">Generate and test your passwords to take your place on the podium!</h3>
                    <section className="col-10">
                        <table className="table table-striped table-hover" id="leaderboard">
                            <thead className="table-dark">
                                <tr>
                                    <th>User</th>
                                    <th>PassPhrases Generated</th>
                                    <th>Passwords Tested</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>myUsernameIsAPassPhrase</td>
                                    <td>239</td>
                                    <td>120</td>
                                </tr>
                                <tr>
                                    <td>CantHackMe</td>
                                    <td>58</td>
                                    <td>37</td>
                                </tr>
                                <tr>
                                    <td>Stephen</td>
                                    <td>19</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>pickle</td>
                                    <td>21</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <p>Rankings are calculated by <em>Passphrases Genetrated + Passwords Tested</em></p>
                </div>
            </main>
    );Name
}