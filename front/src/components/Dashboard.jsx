import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useContext } from 'react'


const Dashboard = ({ user }) => {


  const [catList, setCatList] = useState([])
  const [catId, setCatId] = useState('')
  const [triggerList, setTriggerList] = useState([])


  const getUserCats = async () => {
    console.log("User is:", user)
    const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    console.log(user.id)
    console.log('userlistingcats', res.data)
    setCatId(res.data[0].id)
    setCatList(res.data)
    console.log(catId)
    getCatTriggers()

  }

  const getCatTriggers = async () => {

    const res = await axios.get(`${BASE_URL}/triggers/${catId}`)
    console.log('triggers', res.data)
    setTriggerList(res.data.slice(0, 6))
  }



  useEffect(() => {

    getUserCats()

  }, [catId])


  return (
    <div className="dash-container">
      <div className="dash-title">PETS</div>
      <div className="dash-section">

        <div>{catList?.map((cat) => (<div key={cat.id} className="dash-cats">
          <div>{cat.name}</div>
          <div>{cat.weight}</div>
        </div>))}</div>
      </div>
      <div className="dash-title">RECENT ACTIVITY</div>
      <div className="dash-section">

        <div>{triggerList?.map((trigger) => (<div key={trigger.id} className="dash-trigger">
          <div>{trigger.action}</div>
          <div>{trigger.createdAt}</div>
        </div>))}</div>
      </div>
      <div className="dash-title">INSIGHTS</div>
      <div className="dash-section">

        <div>Average Visits per day</div>
        <div className="stats">4.5</div>
      </div>
    </div>
  )
}

export default Dashboard


