import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import { Link, useNavigate } from 'react-router-dom'

const Triggers = () => {
  let navigate = useNavigate();

  let { cat_id } = useParams()
  const [triggerList, setTriggerList] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [perPage, setPerPage] = useState(10)
  const date = new Date()

  const columns = [
    {
      name: "Action",
      selector: (row) => row.action
    },
    {
      name: "Date",
      selector: (row) => row.date
    },
    {
      name: "Time",
      selector: (row) => row.time
    },

  ]

  // const [triggerData,setTriggerData]=useState({
  //   labels:triggerList.map((data)=>data.createdAt),
  //   datasets:[
  //     {
  //       label:"Visits Per Day"
  //     }
  //   ]
  // })

  // const parseTimeStamps = (arg) => {
  //   arg.map((trig) => (
  //     trig.createdAt.split(/T|\./).slice(0, 2)))
  // }



  const getCatTriggers = async () => {

    const res = await axios.get(`${BASE_URL}/triggers/3`)
    // const newArr = res.data.map((trig) => (
    //   trig.createdAt.split(/T|\./).slice(0, 2)))
    // console.log("newARr", newArr)
    setTriggerList(res.data)

    // setDtArray(parseTimeStamps(triggerList))

  }

  const deleteTrigger = async (arg) => {
    setDeleted(false)
    window.confirm("Are you sure you want to delete this entry?")
    // const response = await axios.delete(`http://localhost:3001/api/makers/${id}/projects/${arg}`)
    const response = await axios.delete(`${BASE_URL}/triggers/actions/${arg}`)
    setDeleted(true)
  }

  const triggerEdit = (arg) => {
    navigate(`/triggers/details/${arg}`)
    // getCatTriggers(selected)
  }

  useEffect(() => {

    getCatTriggers()
  }, [deleted])

  return (
    <div>



      <div className='section-header'></div>
      <div className="trigger-container">
        <div>{triggerList?.map((trigger) => (

          <div key={trigger.id} className="trigger-entry">
            <div>{trigger.action.toUpperCase()}</div>
            <div>DATE: {trigger.date}</div>
            <div>DATE: {trigger.date}</div>
            {/* //<div>DATE: {trigger.date.substring(0, trigger.date.lastIndexOf('T'))}</div> */}
            <div>TIME: {trigger.time}</div>
            {/* <div>TIME: {Date(Date.parse(trigger.createdAt)).substring(16, 24)}</div> */}


            <button className="del-button" onClick={() => triggerEdit(trigger.id)}>Edit</button>
            <button className="del-button" onClick={() => deleteTrigger(trigger.id)}>Delete</button>
          </div>
        ))}
          <div >

          </div>



        </div>
      </div>
    </div>
  )
}


export default Triggers