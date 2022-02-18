import React from 'react';

import './InfoPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="infoContainer">
      <h2>Game</h2>
      <p>
        Unicorn Rancher is a question based game. Every question is 
        random, so each game is different.  You have 4 questions to 
        choose from, and there is no wrong answer! All you have to do
        is answer 3 questions to recieve a badge!
      </p>
      <h2>Profile</h2>
      <p>
        Your profile pic and user name are located in your profile. Feel
        feel to change them with the edit button. You can also delete your
        profile with the edit button, but we don't recommend that! Also
        you can find all the badges you've earned in your profile.
      </p>
      <h2>Badges</h2>
      <p>
        Badges are what you earn after completing a game. There are 4
        different badges that can be awarded. You most definitly want 
        to collect all of them!
      </p>
    </div>
  );
}

export default InfoPage;
