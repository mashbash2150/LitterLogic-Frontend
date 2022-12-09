import { NavLink } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {

  let authOptions;

  if (user) {
    authOptions = (
      <div>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/devices'>MY DEVICES</NavLink>
        <NavLink to='/cats'>MY PETS</NavLink>
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
      <div>
        <h1>LITTERLOGIC</h1>
      </div>
      <div>
        {authenticated && user ? authOptions : unAuthOptions}
      </div>

    </div>
  )
}

export default Nav