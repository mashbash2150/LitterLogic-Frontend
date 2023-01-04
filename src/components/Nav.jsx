import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header';

const Nav = ({ authenticated, user, handleLogOut }) => {


  let authOptions;

  if (user) {
    authOptions = (
      <div>
        <NavLink to='/dashboard'>DASHBOARD</NavLink>
        <NavLink to='/cats'>PET DATA</NavLink>

        <NavLink to='/profile'>PROFILE</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink onClick={handleLogOut} to='/'>LOG OUT</NavLink>
        <img className="header-img" src="https://i.imgur.com/aSdUiH9.png" alt="" />
      </div>
    )
  }
  const unAuthOptions = (
    <div>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/login'>LOGIN</NavLink>
      <NavLink to='/register'>REGISTER</NavLink>
      <NavLink to='/dashboard'>DEMO DASHBOARD</NavLink>

      <img className="header-img" src="https://i.imgur.com/aSdUiH9.png" alt="" />

    </div>
  )


  return (
    <div>

      <div className="nav-container">
        <div className="nav-options">

          {authenticated && user ? authOptions : unAuthOptions}

        </div>
      </div>

    </div>
  )
}

export default Nav