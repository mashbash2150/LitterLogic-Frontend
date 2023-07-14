import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { BASE_URL } from '../globals'
import axios from 'axios'
import { Button } from '@mui/material'



const TriggerDetails = () => {
  let { trigger_id } = useParams()
  console.log(trigger_id)
  const [formState, setFormState] = useState({})

  const updateTrigger = async () => {
    const res = await axios.get(`${BASE_URL}/triggers/actions/${trigger_id}`)
    console.log(typeof res.data)
    setTimeout(setFormState({
      action: res.data.action,
      date: res.data.date,
      time: res.data.time

    }), 3000)

    console.log(formState)
  }


  useEffect(() => {
    updateTrigger()
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${BASE_URL}/triggers/actions/${trigger_id}`, formState)


  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="action">Action: </label>
        <input className="input" type="text" id="action" cols="30" onChange={handleChange} value={formState.action} />
        <label className="label" htmlFor="date">Date:</label>
        <input className="input" type="text" id="date" cols="30" onChange={handleChange} value={formState.date} />
        <label className="label" htmlFor="time">Time:</label>
        <input className="input" type="text" id="time" cols="30" onChange={handleChange} value={formState.time} />
        <Button variant="contained" color="secondary">Submit</Button>
      </form>

    </div>
  )
}

export default TriggerDetails