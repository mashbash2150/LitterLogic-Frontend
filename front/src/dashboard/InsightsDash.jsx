import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'



const InsightsDash = () => {


  const [catList, setCatList] = useState([])
  const [catId, setCatId] = useState('')
  const [triggerList, setTriggerList] = useState([])



  const getInsights = async () => {
    const res = await axios.get(`${BASE_URL}/triggers/2`)
    console.log('triggers', res.data)

  }



  useEffect(() => {




  }, [])



  return (
    <div className="cat-container">

      <div className="col-box">
        <div className="insight">Daily Avg visits this week</div>
        <div className="avg">5.9</div>
      </div>
      <div className="col-box">
        <div className="insight">Daily Avg visits this month</div>
        <div className="avg">7.3</div>
      </div>
      <div className="col-box">
        <div className="insight">Trends</div>
        <div className="adv">Lower than Average <br></br>Is your cat getting enough water?</div>
      </div>
    </div >
  )
}

export default InsightsDash