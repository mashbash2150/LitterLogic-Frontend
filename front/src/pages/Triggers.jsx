import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const Triggers = () => {

  let { cat_id } = useParams()
  const [triggerList, setTriggerList] = useState(null)
  const [deleted, setDeleted] = useState(false)


  const getCatTriggers = async () => {

    const res = await axios.get(`${BASE_URL}/triggers/${cat_id}`)

    setTriggerList(res.data)
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
            <div>TRIGGERED: {trigger.createdAt}</div>
            <div>{trigger.action.toUpperCase()}</div>

            <button className="del-button" onClick={() => deleteTrigger(trigger.id)}>x</button>
          </div>
        ))}




        </div>
      </div>
    </div>
  )
}


export default Triggers