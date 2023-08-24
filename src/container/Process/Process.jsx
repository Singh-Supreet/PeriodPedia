import React from 'react'
import './Process.css'
import Feature from '../../component/features/Feature';
import featureimg from '../../assets/image6.webp';

const featureData = [
  {
    title: 'Menstrual Phase (Day 1-5):',
    text:"The menstrual cycle begins with menstruation, commonly known as a period. During this phase, the uterine lining (endometrium) that has built up in the previous cycle is shed since there was no pregnancy.Menstrual bleeding typically lasts around 3 to 5 days, but it can vary from person to person."
  },
  {
    title: 'Follicular Phase (Day 1-14):',
    text:"The follicular phase starts on the first day of menstruation and lasts until ovulation.Hormones, specifically follicle-stimulating hormone (FSH) and luteinizing hormone (LH), stimulate the growth of follicles in the ovaries.One dominant follicle matures and releases an egg, while the other follicles disintegrate.Estrogen levels increase during this phase, preparing the uterine lining for potential implantation.",
  },
  {
    title: 'Ovulation (Day 14):',
    text:"Ovulation is the midpoint of the menstrual cycle, occurring around day 14 in a typical 28-day cycle (but it can vary).The dominant follicle releases a mature egg (ovum) from the ovary, which travels down the fallopian tube.Ovulation is the most fertile period, and conception is most likely to occur if there is sperm present in the fallopian tube.",
  },
  {
    title: 'Luteal Phase (Day 15-28):',
    text: "The luteal phase follows ovulation and lasts until the start of the next menstrual period. After ovulation, the ruptured follicle transforms into a structure called the corpus luteum, which produces progesterone. Progesterone helps maintain the uterine lining, preparing it for possible embryo implantation. If fertilization does not occur, the corpus luteum regresses, progesterone levels drop, and the uterine lining begins to break down.",

  },
];
const Process = () => {
  return (

    <div className="period__features-head section__padding" id="p&p">
      <h1 className="gradient__text">Menstrual Cycle </h1>
      <p>The menstrual cycle is a natural, monthly process that occurs in females of reproductive age. It is controlled by a complex interplay of hormones and involves various changes in the female reproductive system. The menstrual cycle's primary purpose is to prepare the body for potential pregnancy, but if conception does not occur, the cycle ends with menstruation.</p>
      <h2 className="gradient__text">Phases of the Menstrual Cycle:</h2>
      <div className="period__features ">

        <div className="period__features-box">
          <div className="period__features-box-image">
            <img src={featureimg} alt="Process" />
          </div>
        </div>
        <div className="period__features-container">
          {featureData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Process
