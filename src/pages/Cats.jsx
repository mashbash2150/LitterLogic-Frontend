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
    const res = await axios.get(`${BASE_URL}/cats/1`)
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
    navigate(`/triggers/3`)
    // getCatTriggers(selected)
  }

  useEffect(() => {
    getUserCats()

  }, [catId])
  return (




    <div>
      <div className="table-big-container">
        <div className='dash-title'>LITTERBOX DATA</div>
        <Table paginationRows={10} getRecent={false} />
        {/* <div>{triggerList?.map((trigger) => (
              <div key={trigger.id} className="trigger-entry">
                <div>ACTION: {trigger.action}</div>
                <div>TRIGGERED: {trigger.date}</div>
                <div>TRIGGERED: {trigger.date}</div>
              </div>
            ))}

              

            </div> */}

      </div>
      <div className='profile'>
        <button className="button-lg" onClick={triggerEdit}>EDIT TRIGGERS</button>
      </div>
    </div>

  )
}

export default Cats