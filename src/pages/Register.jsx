import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState({ initialFormValues })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialFormValues)
    navigate('/login')
  }
  return (
    <div className="form-container">
      <div>
        <form onSubmit={handleSubmit}>

          <label className="label" htmlFor="firstName">First Name</label>
          <input
            className="input"
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="John"
            value={formValues.firstName}
            required
          />
          <label className="label" htmlFor="lastName">Last Name</label>
          <input
            className="input"
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Doe"
            value={formValues.lastName}
            required
          />
          <label className="label" htmlFor="email">Email</label>
          <input
            className="input"
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
          <label className="label" htmlFor="password">Password</label>
          <input
            className="input"
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
          <label className="label" htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="input"
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
          <Button variant="contained" color="secondary"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            CREATE ACCOUNT
          </Button>

        </form>
      </div>






    </div >
  )
}

export default Register


