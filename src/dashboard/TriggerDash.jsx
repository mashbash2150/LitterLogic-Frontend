import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback, useContext } from 'react'

import Table from '../components/Table'

const TriggerDash = () => {

  //WORK NEEDED
  // const [catId, setCatId] = useState('')


  // const getCatTriggers = async () => {
  //   if (catId) {
  //     const res = await axios.get(`${BASE_URL}/triggers/3`)
  //     console.log('triggers', res.data)
  //     setTriggerList(res.data.slice(0, 6))
  //   } else {
  //     console.log("no cat ID")
  //   }
  // }



  return (


    <div className="table-container">
      <div className="dash-title">RECENT ACTIVITY</div>
      <Table className="table" paginationRows={6} getRecent={true} theme="dark" />
    </div>

  )
}

export default TriggerDash