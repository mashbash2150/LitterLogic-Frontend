import React from 'react'
import './App.css'
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
import Triggers from './pages/Triggers'
import Devices from './pages/Devices'
import Dashboard from './components/Dashboard'
import UserContext from './UserContext'
import Header from './components/Header'
import TriggerDetails from './pages/TriggerDetails'
import Profile from './pages/Profile'




 const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [showModal,setShowModal]=useState(false)

  const modal=()=>{
    setShowModal(true)
  }


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
      <Header />
          <Nav authenticated={authenticated} user={user} handleLogOut={handleLogOut}/>
      </div>
      <div>

        <Routes>
<Route path="/" element={<Home authenticated={authenticated} user={user}/>}/>
<Route path="/dashboard" element={<Dashboard authenticated={authenticated} user={user}/>}/>
<Route path="/login" element={<SignIn user={user} setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/cats" element={<Cats user={user}/>}/>
<Route path="/cats/add" element={<AddCat user={user}/>}/>
<Route path="/profile" element={<Profile user={user}/>}/>
<Route path="/triggers/details/:trigger_id" element={<TriggerDetails/>}/>
<Route path="/triggers/:cat_id" element={<Triggers/>}/>
        </Routes>
      </div>
     
    </div>
  )
}

export default App