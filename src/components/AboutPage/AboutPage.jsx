import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          Do you wish that life was more simple? Do you feel like you should
          be rewarded answering easy questions? Wouldn't life be a little
          better with some sparkle?
        </p>
        <p>
          Unicorn rancher is simple, fun, and adds some sparkle to your life!
        </p>
        <p>
          All you have to do is answer some simple unicorn questions to recieve
          an amazing badge. Be the best unicorn rancher by collecting all the 
          badges!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
