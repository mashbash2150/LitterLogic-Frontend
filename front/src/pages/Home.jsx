import React from 'react'
import Dashboard from '../components/Dashboard'





const Home = ({ user }) => {
  const images = ["https://i.imgur.com/8tTtPv4.png", "https://images.unsplash.com/photo-1548403119-4f9f60f7c064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"]
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