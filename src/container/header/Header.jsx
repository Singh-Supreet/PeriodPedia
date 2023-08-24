import React from 'react'
import './Header.css'
import doctor from '../../assets/image2.webp';
const Header = () => {
  return (
    <div className="period__header section__padding" id="home">
      <div className="period__header-content">
        <h1 className="gradient__text">
        Empowering girls, one period at a time
        </h1>
        <p>Breaking barriers, shattering stigmas, and fostering a world of understanding and support.</p>
      </div>
      <div className="period__header-image">
          <img src={doctor} alt="ai" />
        </div>
    </div>
  )
}

export default Header
