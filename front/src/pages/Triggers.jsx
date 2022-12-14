import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import LineChart from '../charts/LineChart'

const Triggers = () => {

  let { cat_id } = useParams()
  const [triggerList, setTriggerList] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [dtArray, setDtArray] = useState([])
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

    const res = await axios.get(`${BASE_URL}/triggers/${cat_id}`)
    // const newArr = res.data.map((trig) => (
    //   trig.createdAt.split(/T|\./).slice(0, 2)))
    // console.log("newARr", newArr)
    setTriggerList(res.data)

    // setDtArray(parseTimeStamps(triggerList))

  }

  const deleteTrigger = async (arg) => {
    setDeleted(false)
    alert("Are you sure you want to delete this entry?")
    // const response = await axios.delete(`http://localhost:3001/api/makers/${id}/projects/${arg}`)
    const response = await axios.delete(`${BASE_URL}/triggers/actions/${arg}`)
    setDeleted(true)
  }

  useEffect(() => {

    getCatTriggers()
  }, [deleted])

  return (
    <div>



      <div className='section-header'>LITTERBOX EVENTS</div>
      <div className="trigger-container">
        <div>{triggerList?.map((trigger) => (

          <div key={trigger.id} className="trigger-entry">
            <div>DATE: {trigger.date.substring(0, trigger.date.lastIndexOf('T'))}</div>
            <div>TIME: {trigger.time}</div>
            <div>{trigger.action.toUpperCase()}</div>

            <button className="del-button" onClick={() => deleteTrigger(trigger.id)}>x</button>
          </div>
        ))}
          <div >
            {/* <LineChart /> */}
          </div>



        </div>
      </div>
    </div>
  )
}


export default Triggers