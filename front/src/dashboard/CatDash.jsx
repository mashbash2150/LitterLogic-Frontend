import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useContext } from 'react'
import Chart from '../charts/Chart'
import LineChart from '../charts/LineChart'

const CatDash = ({ user }) => {

  const [catList, setCatList] = useState([])


  const getUserCats = async () => {
    console.log(user)
    const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    console.log('userlistingcats', res.data)
    setCatList(res.data)
  }

  useEffect(() => {
    getUserCats()

  }, [])

  return (
    <div>
      <div>{catList?.map((cat) => (
        <div key={cat.id} className="cat-container">
          <div className="cat-name">{cat.name}</div>
          <div>BIRTHDAY {cat.birthday}</div>
          <div>WEIGHT {cat.weight}</div>
          <div>NOTES {cat.notes}</div>
          <div></div>
        </div>))}
      </div>
    </div>
  )
}

export default CatDash