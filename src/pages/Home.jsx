import React from 'react'
import Dashboard from '../components/Dashboard'
import { Slide, Fade } from 'react-slideshow-image';
import { useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'





const Home = ({ user }) => {


  const fadeImages = [
    {

      url: 'https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/IMG_1380%20(1).JPG?raw=true',

    },
    {

      url: 'https://images.unsplash.com/photo-1576120634744-ee3b635e950e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {

      url: 'https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/IMG_6759%20(1).JPG?raw=true',

    },
    {
      url: 'https://images.unsplash.com/photo-1580558606302-50a9b010800e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {
      url: 'https://images.unsplash.com/photo-1603691602859-e778258aaefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {
      url: 'https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/IMG_9251%20(1).jpg?raw=true',

    },
    {
      url: 'https://images.unsplash.com/photo-1586674638328-a4406842408f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      url: 'https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/IMG_1295.JPG?raw=true',
    },
    {
      url: 'https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/IMG_9300.jpg?raw=true',
    },
    {
      url: 'https://images.unsplash.com/photo-1586674638328-a4406842408f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },

  ];




  return (

    <div >
      <div className="home">

        <div className="largest" >Cats. Love. Boxes. </div>
        <div className="short">Who says their owners can't too?</div>
        <div className="home-container">
          <div className='p-flex-long'>
            <p>  <span className="emph" >Simple + Smart Solutions</span>Litterlogic tracks your cat's litterbox habits by engaging low voltage, wifi-connected sensors that feed movement data into to the User platform, providing addional insights on your cat's health and wellbeing.</p>
          </div>
          <div className='p-flex-short'>
            <p><span className="emph" >Customizable + Fun </span>Optional device add-ons from exhaust fans to customizable illuminated signs can be configured on request.</p>
            <div className="slide-container p-img">
              <Fade>
                {fadeImages.map((fadeImage, index) => (
                  <div className="each-fade" key={index}>
                    <div className="image-container">
                      <img src={fadeImage.url} />
                    </div>
                    <h2>{fadeImage.caption}</h2>
                  </div>
                ))}
              </Fade>
            </div>

          </div>
          <div className="p-flex-med">

            <img className="gif" src="https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/vacant2.gif?raw=true" alt='' />



            <p><span className="emph" >Informative + Easy </span>Whether you're looking out for your cat's health by monitoring their habits, or simply want to embrace the advantages of smart home automation, Litterlogic might have you calling yourself a box-lover too.</p>
          </div>
        </div>
        <div className="large">DISCOVER SMART PET MONITORING<br></br>FOR YOURSELF</div>
        <div >REGISTER OR LOGIN TO BEGIN</div>

        <Link to={'/login'}>
          <Button variant="contained" color="secondary">Login</Button>
        </Link>
        <Link to={'/register'}>
          <Button variant="contained" color="secondary">Create Account</Button>
        </Link>


      </div>


    </div>
  )
}

export default Home