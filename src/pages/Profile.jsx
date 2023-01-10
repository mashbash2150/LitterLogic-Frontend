import React from 'react'
import Devices from './Devices'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Profile = ({ user }) => {

  const [catList, setCatList] = useState([])
  const [deleted, setDeleted] = useState([])


  const getUserCats = async () => {
    console.log(user)
    const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    console.log('userlistingcats', res.data)
    setCatList(res.data)

    //console.log("catId", catList[0].id)
    // getCatTriggers(catList[0].id)
  }

  const deleteCat = async (arg) => {
    setDeleted(false)
    window.confirm("Are you sure you want to delete this cat?")
    // const response = await axios.delete(`http://localhost:3001/api/makers/${id}/projects/${arg}`)
    const response = await axios.delete(`${BASE_URL}/cats/2`)
    setDeleted(true)
  }

  useEffect(() => {
    getUserCats()


  }, [])

  return (
    <div className="profile-container">
      <div className='dash-title'>Hello, {user.email}!</div>

      <div className="profile device-section">My Cats
        <buttons>

          <div></div>
          <Link to={'/cats/add'}>
            <button>Add Cat</button>
          </Link>

          <button>Edit Cat</button>
          <button onClick={() => deleteCat()}>Remove Cat</button>
        </buttons>
      </div>
      <Devices />
    </div>
  )
}

export default Profile