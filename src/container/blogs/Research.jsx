import React from 'react'
import './Blog.css';
import {r1,r2,r3,r4,r5} from './import';
import  Article from '../../component/articles/Article';
const Research = () => {
  return (
    <div className="period__research section__padding" id="Research">
      <div className="period__research-heading">
        <h1 className="gradient__text">
        A lot of research has been done on the menstrual cycles of girls. <br /> Here are some:
        </h1>
      </div>
      <div className="period__research-container">
        <div className="period__research-container_group">
        <Article Rearchimg={r1} title="Menstrual Cycle" para="Menstrual cycle is an important indicator of women's reproductive health. However, menstruation has a different pattern within a few years after menarche, which might not be well understood by many adolescent girls" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6132001/"/>
        <Article Rearchimg={r2} title="Menstrual Cycle as a Vital Sign" para="The American Academy of Pediatrics endorses this document. The information should not be construed as dictating an exclusive course of treatment or procedure to be followed." href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2015/12/menstruation-in-girls-and-adolescents-using-the-menstrual-cycle-as-a-vital-sign"/>
        <Article Rearchimg={r4} title="Period Poverty as a Public Health Crisis" para="With 1 in 5 girls missing school due to lack of menstrual products1, period poverty is an important, yet often ignored, public health crisis. " href="https://sph.umich.edu/pursuit/2020posts/period-poverty.html/"/>
        <Article Rearchimg={r3} title="Is a three-day period normal?" para="Menstruation is the monthly shedding of the lining of your uterus. Menstruation is also known by the terms menses, menstrual period, menstrual cycle or " href="https://my.clevelandclinic.org/health/articles/10132-menstrual-cycle"/>
        <Article Rearchimg={r5} title="Period Protocol: When Is It Time to Call Your Doctor?"  para="A woman’s menstrual cycle is very personal and highly individual. What’s considered a “normal” period for one woman may be extremely abnormal for another. Some women seem to be blessed with light periods and little discomfort, while others struggle with naturally heavy bleeding and pain." href="https://www.texashealth.org/Health-and-Wellness/Women-and-Infants/Period-Protocol-When-Is-It-Time-to-Call-Your-Doctor"/>
        </div>
      </div>
    </div>
  )
}

export default Research
