import React from 'react'
import CatCard from './CatCard'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useContext } from 'react'

import CatDash from '../dashboard/CatDash'
import TriggerDash from '../dashboard/TriggerDash'
import InsightsDash from '../dashboard/InsightsDash'

const Dashboard = ({ user }) => {



  return (
    <div className="dash-container">
      <div className="dash-title"></div>
      <div className="dash-section">
        <div>
          <CatDash user={user} />
        </div>
      </div>

      <div className="dash-section">
        <div>
          <InsightsDash user={user} />
        </div>
      </div>

      <div className="table-section">
        <div>
          <TriggerDash user={user} />
        </div>
      </div>




    </div>
  )
}

export default Dashboard
