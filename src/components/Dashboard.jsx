import React from 'react'
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
