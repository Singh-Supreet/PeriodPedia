import React from 'react'
import './Problems.css'
import problems from '../../assets/image5.webp'
import Feature from '../../component/features/Feature';

const Problems = () => (
  <div className="period__possibility section__padding  gradient__bg" id="possibility">
    <div className="period__possibility-image">
      <img src={problems} alt="possibility" />
    </div>
    <div className="period__possibility-content">
      <h1 className="gradient__text">Hormonal Changes during the Menstrual Cycle:</h1>
      <p>Throughout the menstrual cycle, hormones play a crucial role in regulating and orchestrating these changes:</p>
      <div className="period__problems-container">
        <Feature title="Follicle-Stimulating Hormone (FSH):" text="Secreted by the pituitary gland, FSH stimulates the growth of follicles in the ovaries."/>
        <Feature title="Luteinizing Hormone (LH):" text="Also released by the pituitary gland, LH triggers the release of the mature egg during ovulation."/>
        <Feature title="Estrogen" text="Produced mainly by the developing follicles, estrogen promotes the growth and thickening of the uterine lining." />
        <Feature title="Progesterone" text="Secreted by the corpus luteum after ovulation, progesterone prepares the uterus for possible pregnancy and helps maintain the uterine lining." />
      </div>
    </div>
  </div>
);

export default Problems
