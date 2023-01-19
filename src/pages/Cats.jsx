import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from '../components/Table'
import CatDash from '../dashboard/CatDash'



const Cats = ({ user }) => {
  let navigate = useNavigate()

  const [catId, setCatId] = useState('')

  // WORK NEEDED
  const [catList, setCatList] = useState([])
  const [triggerList, setTriggerList] = useState([])
  const [selectedCat, setSelectedCat] = useState('')
  const [perPage, setPerPage] = useState(10)





  const getUserCats = async () => {
    const res = await axios.get(`${BASE_URL}/cats/1`)
    //DISABLED FOR DEMO:
    // const res = await axios.get(`${BASE_URL}/cats/${user.id}`)
    setCatList(res.data)
    setCatId(res.data[0].id)
  }



  const getCatId = (selected) => {
    setSelectedCat(selected)
  }
  const triggerEdit = () => {
    navigate(`/triggers/3`)

  }

  useEffect(() => {
    getUserCats()

  }, [catId])
  return (




    <div>
      <div className="table-big-container">
        <div className='dash-title'>LITTERBOX DATA</div>
        <Table paginationRows={10} getRecent={false} />

      </div>
      <div className='profile'>
        <button className="button-lg" onClick={triggerEdit}>EDIT TRIGGERS</button>
      </div>
    </div>

  )
}

export default Cats