import React from 'react'
import './Whatperiod.css'
import Feature from '../../component/features/Feature';
import period from '../../assets/image7.webp';
const Whatperiod = () => {
  return (

    <div className="period__wp section__margin" id="wp">
      <div className="period__wp-feature">
        <Feature title="What is Period" text="A period is a release of blood from a girl's uterus, out through her vagina. It is a sign that she is getting close to the end of puberty.

There is a lot to learn about periods. Here are some common questions that teens have."/>
      </div>
      <div className='period__wp-header'>

        <div className="period__wp-header-image">
          <img src={period} alt="ai" />
        </div>

        <div className="period__wp-header-content">
          <h1 className="gradient__text">
            Empowering girls, one period at a time
          </h1>
        </div>

      </div>

      <div className="period__wp-container">
        <Feature title="Menstruation" text="Menstruation is a natural biological process that occurs in females of reproductive age, typically starting during puberty and continuing until menopause." />
        <Feature title="How Often Does a Period Happen?" text="Periods usually happen about once every 4–5 weeks. But some girls get their periods a little less or more often." />
        <Feature title="Can exercise impact the menstrual cycle?" text="Yes, exercise can impact the menstrual cycle. Intense or excessive exercise might lead to irregular periods or even missed periods in some individuals." />        
        <Feature title="Can stress affect the menstrual cycle?" text="Yes, stress can disrupt the menstrual cycle, causing irregular periods or even missed periods due to hormonal changes." />

      </div>

    </div>
  )
}

export default Whatperiod
