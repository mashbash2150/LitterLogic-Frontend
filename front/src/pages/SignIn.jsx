import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Auth'

const Login = ({ toggleAuthenticated, setUser, user }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ firstName: '', lastName: '', email: '', password: '' })


  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({ firstName: '', lastName: '', email: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/dashboard')

  }


  return (
    <div className="form-container">
      <div >
        <form className="form" onSubmit={handleSubmit}>

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
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login