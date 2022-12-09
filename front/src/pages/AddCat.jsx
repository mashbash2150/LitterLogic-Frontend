import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const AddCat = ({ user }) => {
  console.log(user)
  let navigate = useNavigate()
  const condition = ''
  const initialFormState = {
    name: '',
    birthday: '',
    weight: '',
    price: '',
    healthConditions: [],
    notes: ''
  }

  const [formState, setFormState] = useState(initialFormState)
  const [arrayValue, setArrayValue] = useState('')

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const addToArray = (e) => {

    setArrayValue(e.target.id = e.target.value)

  }

  const pushToArray = (arr) => {
    console.log(arr)
    arr.push(arrayValue)
    console.log(arrayValue)

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/cats/create/${user.id}`, formState)
    setFormState(initialFormState)
    navigate(`/cats`)
  }



  return (
    <div className='form-container'>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">
            PET'S NAME
          </label>
          <input
            className="input"
            type="text"
            id="name"
            value={formState.name}
            onChange={handleChange}

          />
          <label className="label" htmlFor="birthday">
            BIRTHDAY (APPROXIMATE)
          </label>
          <input
            id="birthday"
            className="input"
            type="date"
            placeholder="YYYY-MM-DD"
            value={formState.birthday}
            onChange={handleChange}

          />
          <label className="label" htmlFor="weight">
            WEIGHT
          </label>
          <input
            id="weight"
            className="input"
            type="number"
            value={formState.weight}
            onChange={handleChange}

          />
          <label className="label" htmlFor="healthConditions">
            KNOWN HEALTH CONDITIONS
          </label>
          <input
            id="healthConditions"
            className="input"
            type="text"
            value={arrayValue}
            onChange={addToArray}

          />

          <div>{formState.healthConditions?.map((condition) => (
            <div key={condition.id}>{condition}</div>
          ))}</div>
          <label className="label" htmlFor="notes">
            NOTES
          </label>
          <input
            id="notes"
            className="input"
            type="text"
            value={formState.notes}
            onChange={handleChange}

          />

          <button className="button" type="submit">
            ADD PET
          </button>

        </form>
        <button onClick={() => pushToArray(formState.healthConditions)}>+</button>
      </div>
    </div>
  )
}

export default AddCat