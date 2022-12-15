import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from '../components/Table'
import CatDash from '../dashboard/CatDash'



const Cats = ({ user }) => {
  let navigate = useNavigate()

  const [catList, setCatList] = useState([])
  const [catId, setCatId] = useState('')
  const [triggerList, setTriggerList] = useState([])
  const [selectedCat, setSelectedCat] = useState('')

  const [perPage, setPerPage] = useState(10)





  const getUserCats = async () => {
    //console.log(user)
    const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    //console.log('userlistingcats', res.data)
    setCatList(res.data)
    setCatId(res.data[0].id)
    //console.log("catId", catList[0].id)
    // getCatTriggers(catList[0].id)
  }

  // const getCatTriggers = async (arg) => {
  //   console.log(catList)
  //   const res = await axios.get(`${BASE_URL}/triggers/2`)
  //   const newArr = res.data.map((trig) => (
  //     trig.createdAt.split(/T|\./).slice(0, 2)))
  //   console.log("newARr", newArr)
  //   setTriggerList(newArr)
  // }

  const getCatId = (selected) => {
    setSelectedCat(selected)
    // getCatTriggers(selected)
  }
  const triggerEdit = () => {
    navigate(`/triggers/2`)
    // getCatTriggers(selected)
  }

  useEffect(() => {
    getUserCats()

  }, [catId])
  return (
    <div className="pets-container">

      <div>Adding a New Pet? </div>
      <Link to={'/cats/add'}>
        <button className="button">ADD PET</button>
      </Link>
      <CatDash catList={catList} />
      <div >
        <div className='dash-title'>MY CAT</div>
        {/* 
        <div>{catList?.map((cat) => (
          <div key={cat.id} className="cat-stats" onClick={() => getCatId(cat.id)}>
            <div className="cat-name">{cat.name}</div>
            <div>BIRTHDAY {cat.birthday}</div>
            <div>WEIGHT {cat.weight}</div>

            <div>NOTES {cat.notes}</div>
            <div></div>
          </div>

        ))} */}
        <div className="events-container">


        </div>


        <div className='section-header'>LITTERBOX EVENTS</div>
        <div className="trigger-container">
          <Table paginationRows={10} getRecent={false} />
          {/* <div>{triggerList?.map((trigger) => (
              <div key={trigger.id} className="trigger-entry">
                <div>ACTION: {trigger.action}</div>
                <div>TRIGGERED: {trigger.date}</div>
                <div>TRIGGERED: {trigger.date}</div>
              </div>
            ))}

              

            </div> */}
          <button className="button-lg" onClick={triggerEdit}>EDIT TRIGGERS</button>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Cats