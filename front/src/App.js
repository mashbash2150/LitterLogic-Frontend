import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Cats from './pages/Cats'
import About from './pages/About'
import AddCat from './pages/AddCat'
import Home from './pages/Home'
import Devices from './pages/Devices'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)


  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div>
      <div>
          <Nav authenticated={authenticated} user={user} handleLogOut={handleLogOut}/>
      </div>
      <main>
        <Routes>
<Route path="/" element={<Home authenticated={authenticated} user={user}/>}/>
<Route path="/login" element={<SignIn setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/cats" element={<Cats user={user}/>}/>
<Route path="/cats/add" element={<AddCat user={user}/>}/>
<Route path="/devices" element={<Devices/>}/>


        </Routes>
      </main>
     
    </div>
  )
}

export default App