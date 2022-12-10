import React from 'react'
import CatCard from '../components/CatCard'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Cats = ({ user }) => {

  const [catList, setCatList] = useState(null)

  const getUserCats = async () => {
    const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    console.log('userlisting', res.data)
    setCatList(res.data)
  }

  useEffect(() => {
    getUserCats()
  }, [user])
  return (
    <div>ACTIVE PETS
      <div className="cat-container">
        <div>{catList?.map((cat) => (
          <div className="cat-container" key={cat.id}>
            <div>NAME {cat.name}</div>
            <div>BIRTHDAY {cat.birthday}</div>
            <div>WEIGHT {cat.weight}</div>
            <div>HEALTH CONDITIONS {cat.healthConditions?.map((condition) => (<div key={condition.id}>{condition}</div>))}</div>
            <div>NOTES {cat.notes}</div>
            <div></div>
          </div>


        ))}

        </div>
      </div>
      <Link to={'/cats/add'}>
        <button>ADD PET</button>
      </Link>
    </div>
  )
}

export default Cats