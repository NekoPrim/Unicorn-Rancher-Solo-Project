import React from 'react';

import './Technologies.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Technologies() {
    return (
    <div className="aboutContainer">
        <div>
            <h2 className="tTitle">
                Technologies Used
            </h2>
            <ul className="tCont">
                <li>
                    HTML / CSS / JavaScript
                </li>
                <li>
                    Express / Node.js / Passport
                </li>
                <li>
                    React / Redux / Saga
                </li>
                <li>
                    SQL / PG
                </li>
                <li>
                    Postico / Github
                </li>
            </ul>
            <h2 className="tTitle">
                Challenges 
            </h2>
            <ul className="tCont">
                <li>
                    Keeping track of all my databases (8), reducers(13), and 
                    saga/routes(8). 
                </li>
                <li>
                    Condiditonal rendering.
                </li>
            </ul>
            <h2 className="tTitle">
                Future Additions
            </h2 >
            <ul className="tCont">
                <li>
                    Add more levels (unlocked when all badges achieved).
                </li>
            </ul>
            <h2 className="tTitle">
                Thankyou!
            </h2>
            <ul>
                <li>
                    My Cohort / Edan
                </li>
                <li>
                    Family / Friends
                </li>
                <li>
                    Prime
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Technologies;
