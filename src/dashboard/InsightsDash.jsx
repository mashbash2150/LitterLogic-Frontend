import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'



const InsightsDash = () => {

  //WORK NEEDED

  // const [catList, setCatList] = useState([])
  // const [catId, setCatId] = useState('')
  // const [triggerList, setTriggerList] = useState([])

  // const getInsights = async () => {
  //   const res = await axios.get(`${BASE_URL}/triggers/3`)
  //   console.log('triggers', res.data)

  // }






  return (
    <div className="cat-stats-container">
      <div className="dash-title">INSIGHTS</div>
      <div className="flex-container">

        <div className="col-box">
          <div className="insight">Daily visits this week <br></br>(avg)</div>
          <div className="avg">5.9</div>
        </div>
        <div className="col-box">
          <div className="insight">Daily visits this month <br></br>(avg)</div>
          <div className="avg">7.3</div>
        </div>
        <div className="col-box">
          <div className="insight">Trends</div>
          <div className="adv">LOWER THAN AVERAGE <br></br>Is your cat getting enough water?</div>
        </div>
      </div>
    </div >
  )
}

export default InsightsDash