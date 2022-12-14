import React from 'react'
import Dashboard from '../components/Dashboard'





const Home = ({ user }) => {
  const images = ["https://i.imgur.com/8tTtPv4.png", "https://imgur.com/Ox7Me25"]
  const carosel = document.querySelector(".carosel")
  const interval = setInterval(() => {
    //startCarosel();
  }, 3000)
  let index = 0
  const startCarosel = () => {
    carosel.getElementsByClassName.backgroundImage = `url(${images[index++]})`
    carosel.classList.remove("fade")
    void carosel.offsetWidth;
    carosel.classList.add("fade")
    if (index > images.length - 1) index = 0
  }

  return (
    <div>
      <div className="welcome">



        <div className="charts fade">

          <div className="overlay-text fade-in">DISCOVER SMART PET MONITORING</div>
          <div className="carosel overlay"> </div>
        </div>
        <div>
          <div >Welcome To LitterLogic. <br></br> Login or Register to Begin</div>
        </div>
      </div>
    </div>
  )
}

export default Home