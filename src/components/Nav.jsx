import { NavLink, useRouteLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header';

const Nav = ({ authenticated, user, handleLogOut }) => {

  const activateDemo = (arg) => {
    user = { id: 1, email: 'test@test.com' }
    authenticated = true

  }
  let authOptions;

  if (user) {
    authOptions = (
      <div>
        <NavLink to='/dashboard'>DASHBOARD</NavLink>
        <NavLink to='/cats'>LITTERBOX DATA</NavLink>

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
      <NavLink class="demo" to='/dashboard'>DEMO DASHBOARD</NavLink>
      <NavLink class="demo" to='/cats'>DEMO LITTERBOX DATA</NavLink>
      <NavLink class="demo" to='/profile'>DEMO PROFILE</NavLink>

      <img className="header-img" src="https://i.imgur.com/aSdUiH9.png" alt="" />

    </div>
  )


  return (
    <div>

      <div className="nav-container">
        <div className="nav-options">
          <div>
            <NavLink to='/dashboard'>DASHBOARD</NavLink>
            <NavLink to='/cats'>LITTERBOX DATA</NavLink>

            <NavLink to='/profile'>PROFILE</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink onClick={handleLogOut} to='/'>LOG OUT</NavLink>
            <img className="header-img" src="https://i.imgur.com/aSdUiH9.png" alt="" />
          </div>
          {/* DISABLED FOR DEMO: */}
          {/* {authenticated && user ? authOptions : unAuthOptions} */}
        </div>
      </div>

    </div>
  )
}

export default Nav