import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useContext } from 'react'
import Chart from '../charts/Chart'
import LineChart from '../charts/LineChart'

const TriggerDash = () => {


  const [catList, setCatList] = useState([])
  const [catId, setCatId] = useState('')
  const [triggerList, setTriggerList] = useState([])


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




  }, [])



  return (
    <div>TriggerDash</div>
  )
}

export default TriggerDash