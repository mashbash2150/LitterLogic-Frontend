import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useContext } from 'react'
import Chart from '../charts/Chart'
import LineChart from '../charts/LineChart'


const Dashboard = ({ user }) => {


  const [catList, setCatList] = useState([])
  const [catId, setCatId] = useState('')
  const [triggerList, setTriggerList] = useState([])


  const getUserCats = async () => {
    console.log("User is:", user)
    const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    console.log('userlistingcats', res.data)
    setCatList(res.data)
    //setCatId(catList[0].id)
    setTimeout(3000)

    //console.log(catId)
    // getCatTriggers()

  }


  const getCatTriggers = async () => {
    if (catId) {
      const res = await axios.get(`${BASE_URL}/triggers/${catId}`)
      console.log('triggers', res.data)
      setTriggerList(res.data.slice(0, 6))
    } else {
      console.log("no cat ID")
    }
  }



  useEffect(() => {

    getUserCats()


  }, [])


  return (

  //   <div className="dash-container">
  //     <div className="dash-title">PETS</div>
  //     <div className="dash-section">
  //       <div>CATS PLACEHOLDER </div>
  //       <div>{catList?.map((cat) => (<div key={cat.id} className="dash-cats">
  //         <div>{cat.name}</div>
  //         <div>{cat.weight}</div>
  //       </div>))}</div>
  //     </div>
  //     <div className="dash-title">RECENT ACTIVITY</div>
  //     <div className="dash-section">

  //       <div>{triggerList?.map((trigger) => (
  //         <div key={trigger.id} className="dash-trigger">

  //           <div className="tg-test">{trigger.date}</div>
  //           <div className="tg-test">{trigger.time}</div>
  //           <div className="tg-test">{trigger.action}</div>

  //         </div>))}
  //       </div>


  //     </div>


  //     {/* <div >
  //       <LineChart catId={catId} />
  //     </div> */}
  //     <div className="dash-title">INSIGHTS</div>
  //     <div className="dash-section">
  //       <div>STATS PLACEHOLDER</div>
  //       <div>Average Visits per day</div>
  //       <div className="stats">4.5</div>
  //     </div>
  //   </div>


  // )

}
export default Dashboard


