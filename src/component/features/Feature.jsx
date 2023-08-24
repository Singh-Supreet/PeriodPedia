import React from 'react'
import './Feature.css'
const Feature = ({title,text,Button}) => {
  return (
    <div className="period__features-container__feature">
      <div className="period__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="period__features-container_feature-text">
        <p>{text}</p>
      </div>
      <div className="">
        <p>{Button}</p>
      </div>
    </div>
  )
}

export default Feature
