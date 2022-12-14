import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'



const Insights = () => {


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
    <div>Insights</div>
  )
}

export default Insights