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
      <>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="nav-btn">Log In</NavLink>
        <NavLink to="/signup" className="nav-btn">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navbar">
      <nav className="navbar">
          <NavLink exact to="/" className="nav-btn" id="home-btn">Home</NavLink>
          <div className="span" />
          {isLoaded && sessionLinks}
      </nav>   
    </div>
  );
}


export default Navigation;
