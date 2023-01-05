import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useContext } from 'react'


const CatDash = ({ user }) => {
  let navigate = useNavigate();

  const [catList, setCatList] = useState([])


  const getUserCats = async () => {
    console.log(user)
    const res = await axios.get(`${BASE_URL}/cats/1`)
    console.log('userlistingcats', res.data)
    setCatList(res.data)
  }

  const goToCat = () => {
    navigate("/cats")
  }
  useEffect(() => {
    getUserCats()

  }, [])

  return (
    <div onClick={goToCat} className="cat-container">
      <img className="dash-img" src="https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/IMG_9300.jpg?raw=true" alt='feta' />
      <div>{catList?.map((cat) => (
        <div key={cat.id} className="cat-stats" >
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