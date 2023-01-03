import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useContext } from 'react'
import Chart from '../charts/Chart'
import LineChart from '../charts/LineChart'
import Table from '../components/Table'

const TriggerDash = () => {


  const [catList, setCatList] = useState([])
  const [catId, setCatId] = useState('')
  const [triggerList, setTriggerList] = useState([])



  const getCatTriggers = async () => {
    if (catId) {
      const res = await axios.get(`${BASE_URL}/triggers/3`)
      console.log('triggers', res.data)
      setTriggerList(res.data.slice(0, 6))
    } else {
      console.log("no cat ID")
    }
  }



  useEffect(() => {




  }, [])



  return (
    <div className="table-container">
      <Table className="table" paginationRows={5} getRecent={true} theme="dark" />
    </div>
  )
}

export default TriggerDash