import React from 'react'
import CatCard from '../components/CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useContext } from 'react'
import Chart from '../charts/Chart'
import LineChart from '../charts/LineChart'
import CatDash from '../dashboard/CatDash'
import TriggerDash from '../dashboard/TriggerDash'

const Dashboard = ({ user }) => {



  return (
    <div className="dash-container">
      <div className="dash-title">MY CAT</div>
      <div className="dash-section">
        <div>
          <CatDash user={user} />
        </div>
      </div>
      <div className="dash-title">RECENT ACTIVITY</div>
      <div className="table-section">
        <div>
          <TriggerDash user={user} />
        </div>
      </div>
      <div className="dash-title">INSIGHTS</div>
      <div className="dash-section">
        <div>
          Some Stuff like AVGs
        </div>
      </div>



    </div>
  )
}

export default Dashboard
