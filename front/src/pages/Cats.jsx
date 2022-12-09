import React from 'react'
import CatCard from '../components/CatCard'

const Cats = () => {
  return (
    <div>ACTIVE PETS
      <div>
        <CatCard />
      </div>
      <button>ADD PET</button>
    </div>
  )
}

export default Cats