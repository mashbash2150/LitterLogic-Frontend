import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'

const AddCat = ({ user }) => {
  let navigate = useNavigate()
  const initialFormState = {
    name: '',
    birthday: '',
    weight: '',
    price: '',
    healthConditions: [],
    notes: ''
  }
  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/cats/create/${user.id}`, formState)
    setFormState(initialFormState)
    navigate(`/cats`)
  }
  return (
    <div class='form-container'>
      <div class='form'>
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
            required
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
            required
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
            required
          />
          <label className="label" htmlFor="healthConditions">
            KNOWN HEALTH CONDITIONS
          </label>
          <input
            id="healthConditions"
            className="input"
            type="text"
            value={formState.healthConditions}
            onChange={handleChange}
            required
          />
          <button>+</button>
          <label className="label" htmlFor="notes">
            NOTES
          </label>
          <input
            id="notes"
            className="input"
            type="text"
            value={formState.notes}
            onChange={handleChange}
            required
          />
          <button className="button" type="submit">
            ADD PET
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCat