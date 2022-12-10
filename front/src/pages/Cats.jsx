import React from 'react'
import CatCard from '../components/CatCard'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Cats = ({ user }) => {

  const [catList, setCatList] = useState(null)
  const [triggerList, setTriggerList] = useState(null)
  const [selectedCat, setSelectedCat] = useState(null)

  const getUserCats = async () => {
    const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    console.log('userlistingcats', res.data)
    setCatList(res.data)
  }

  const getCatTriggers = async (selected) => {
    const res = await axios.get(`${BASE_URL}/triggers/${selected}`)
    console.log('triggers', res.data)
    setTriggerList(res.data)
  }

  const getCatId = (selected) => {
    setSelectedCat(selected)
    getCatTriggers(selected)
  }

  useEffect(() => {
    getUserCats()
  }, [])
  return (
    <div>ACTIVE PETS
      <div className="pets-container">
        <div>{catList?.map((cat) => (
          <div key={cat.id} className="cat-container" onClick={() => getCatId(cat.id)}>
            <div>NAME {cat.name}</div>
            <div>BIRTHDAY {cat.birthday}</div>
            <div>WEIGHT {cat.weight}</div>
            <div>HEALTH CONDITIONS {cat.healthConditions?.map((condition) => (
              <div key={condition.id}>{condition}</div>))}</div>
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