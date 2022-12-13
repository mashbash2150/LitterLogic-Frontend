import { NavLink } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {

  let authOptions;

  if (user) {
    authOptions = (
      <div>
        <NavLink to='/dashboard'>HOME</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/devices'>DEVICES</NavLink>
        <NavLink to='/cats'>PETS</NavLink>
        <NavLink onClick={handleLogOut} to='/'>LOG OUT</NavLink>
      </div>
    )
  }
  const unAuthOptions = (
    <div>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/login'>LOGIN</NavLink>
      <NavLink to='/register'>REGISTER</NavLink>

    </div>
  )


  return (
    <div>
      <div className="title-container">
        <div className="page-title">LITTERLOGIC</div>
      </div>
      <div className="nav-container">
        <div className="nav-options">
          {authenticated && user ? authOptions : unAuthOptions}
        </div>
      </div>

    </div>
  )
}

export default Nav