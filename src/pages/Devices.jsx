import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import BuildIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';


const Devices = () => {
  return (
    <div className="device-container">

      <div className="profile device-section">My Devices
        <buttons>

          <div></div>


          <Button startIcon={<AddIcon />} variant="contained" color="secondary">Register Device</Button>
          <Button startIcon={<BuildIcon />} variant="contained" color="secondary">CaliBrate</Button>
          <Button startIcon={<DeleteIcon />} variant="contained" color="secondary">Remove Device</Button>
        </buttons>
      </div>

    </div>
  )
}

export default Devices