import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Devices = () => {
  return (
    <div className="device-container">
      <div className="device-section">

        Register Device
        <FontAwesomeIcon icon="fa-solid fa-tachograph-digital" />
      </div>
      <div className="device-section">
        Calibrate
      </div>
      <div className="device-section">
        Remove Device
      </div>
    </div>
  )
}

export default Devices