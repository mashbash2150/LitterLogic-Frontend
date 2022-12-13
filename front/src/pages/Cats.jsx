import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Cats = ({ user }) => {
  let navigate = useNavigate()

  const [catList, setCatList] = useState([])
  const [catId, setCatId] = useState('')
  const [triggerList, setTriggerList] = useState([])
  const [selectedCat, setSelectedCat] = useState('')

  const getUserCats = async () => {
    console.log(user)
    const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    console.log('userlistingcats', res.data)
    setCatList(res.data)
    setCatId(res.data[0].id)
    console.log("catId", catList[0].id)
    getCatTriggers(catList[0].id)
  }

  const getCatTriggers = async (arg) => {
    console.log(catList)
    const res = await axios.get(`${BASE_URL}/triggers/${arg}`)
    console.log('triggers', res.data)
    setTriggerList(res.data)
  }

  const getCatId = (selected) => {
    setSelectedCat(selected)
    // getCatTriggers(selected)
  }
  const triggerEdit = () => {
    navigate(`/triggers/${catId}`)
    // getCatTriggers(selected)
  }

  useEffect(() => {
    getUserCats()

  }, [catId])
  return (
    <div className="pets-container">
      <div className='section-header'>ACTIVE PETS </div>
      <Link to={'/cats/add'}>
        <button>ADD PET</button>
      </Link>
      <div >
        <div>{catList?.map((cat) => (
          <div key={cat.id} className="cat-container" onClick={() => getCatId(cat.id)}>
            <div>NAME {cat.name}</div>
            <div>BIRTHDAY {cat.birthday}</div>
            <div>WEIGHT {cat.weight}</div>
            {/* <div>HEALTH CONDITIONS {cat.healthConditions?.map((condition) => (
              <div key={condition.id}>{condition}</div>))}</div> */}
            <div>NOTES {cat.notes}</div>
            <div></div>
          </div>


        ))}


        </div>

        <div className='section-header'>LITTERBOX EVENTS</div>
        <div className="trigger-container">
          <div>{triggerList?.map((trigger) => (
            <div key={trigger.id} className="trigger-entry">
              <div>ACTION: {trigger.action}</div>
              <div>TRIGGERED: {trigger.createdAt}</div>
            </div>
          ))}

            <button onClick={triggerEdit}>EDIT TRIGGERS</button>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Cats