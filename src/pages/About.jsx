import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section"></div>

      <div className="about">
        <div className="about-large">Hi,<br></br> This is me <br></br>and my cat <br></br>Feta!
          <img src="https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/IMG_1436%20(1).JPG?raw=true" alt="" />   </div>  </div>
      <div className="about-text">
        <div>Sure, Feta <em>IS</em> awesome, however I created LitterLogic not because I think cats are cool, but because I think electronics are!
          My professional background has involved a great deal of work in automation and micro-electronics, so I set my sights on challenging myself
          to see if I could incorporate my prior hardware expertise into my final project for General Assembly's Full Stack Software Engineering Immersive.
          All aspects of this app, including the hardware sensor that supplies its data, I built entirely from the ground up.  A few notes on it's components:

          <div className="about-med">Hardware</div>
          I put together a simple device consisiting of an ESP32 dev board, a PIR sensor, and LEDs (plus a few jumper wires and resistors).  Using the Arduino IDE, I wrote and uploaded a simple application to the device which allows it to communicate with my Postgres Backend.  It does this by sending a simple JSON object containing timestamps pertaining to state changes of the sensor. After some sensitivity adjustments
          the sensor, when placed in Feta's litterbox, the device will fire a POST request when she enters, as well as when she exits. For addedd fun, the sensor behaves much like an airplane lavatory sign, illuminating a green cat when vacant, and a red cat when occupied.

          <div className="about-med">Backend & API</div>

          Hosted on Heroku for the time being, my Postgres backend stores parsed data from the sensor's API calls into a 'triggers' table, that supplies the information for my frontend tables. One area still
          requiring improvments is the normalization of timestamps to facilitate simpler data visualization.
          <div className="about-med">Frontend</div>
          The React Data Table Component library was used to render trigger data in a table format.  While I wasn't able to implement chart libraries for the MVP version of this app, it is my goal in the near future to include charting in the insights portion of the dashboard.

          <div className="about-text">While many improvements still need to be made, the project served its purpose as a fun exploration of the world of IOT - not to mention, it has inspired a number of other home automation projects that I will continue to noodle on in my spare time.
          </div>

        </div>
      </div>
    </div>
  )
}

export default About