import React from 'react'
import Dashboard from '../components/Dashboard'
import { Slide, Fade } from 'react-slideshow-image';
import { useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css'





const Home = ({ user }) => {


  const fadeImages = [
    {

      url: 'https://github.com/mashbash2150/LitterLogic-Frontend/blob/main/images/IMG_9239.JPG?raw=true',

    },
    {

      url: 'https://images.unsplash.com/photo-1576120634744-ee3b635e950e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {
      url: 'https://images.unsplash.com/photo-1580558606302-50a9b010800e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {
      url: 'https://images.unsplash.com/photo-1603691602859-e778258aaefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

    },
    {
      url: 'https://images.unsplash.com/photo-1586674638328-a4406842408f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1586674638328-a4406842408f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },

  ];




  return (

    <div >
      <div className="home">

        <div className="large" >Cats. Love. Boxes.</div>
        <div className="short">Who says their owners can't love them too?</div>
        <div>
          <div className='p-flex-long'>
            <p>  <span className="emph" >Enter Litterlogic. </span>Our low profile, low voltage sensors relay information to the litterlogic platform, where addional insights are provided on your cat's litterbox usage.</p>
          </div>
          <div className='p-flex-short'>
            <p><span className="emph" >Customizable + Fun </span>Optional device add ons can enhance the experience by triggering anything from exhaust fans, to customized illuminated signs.</p>
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
          <div className="p-flex-long">

            <p><span className="emph" >Informative + Easy </span>Whether you're looking out for your cat's health by monitoring their habits, simply want to embrace smart home features, litterlogic is sure to make you warm up to (litter)boxes too.</p>
          </div>
        </div>
        <div className="large">DISCOVER SMART PET MONITORING<br></br>FOR YOURSELF</div>
        <div >REGISTER OR LOGIN TO BEGIN</div>
      </div>


    </div>
  )
}

export default Home