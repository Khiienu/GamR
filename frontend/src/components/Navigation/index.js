// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="login-btn">Log In</NavLink>
        <NavLink to="/signup" className="signup-btn">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" className="home-btn">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}


export default Navigation;
