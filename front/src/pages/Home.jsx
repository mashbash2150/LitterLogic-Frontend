import React from 'react'
import Dashboard from '../components/Dashboard'

const Home = ({ user }) => {
  return (
    <div>
      <Dashboard user={user} />
    </div>
  )
}

export default Home