import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

import './UserPage.css';

function UserPage() {
  
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
      <div className="container">
        <h2 className="uTitle">Welcome, {user.username}!</h2>
        <div>
          <img className="uImg" src="images/Cartoon-Unicorn.jpeg" />
        </div>
        <LogOutButton className="btn uBtn" />
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
