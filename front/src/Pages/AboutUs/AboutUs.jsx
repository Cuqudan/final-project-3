import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SectionAboutUs from '../../Components/AboutSections/SectionAboutUs'
import SectionRider from '../../Components/AboutSections/SectionRider'
import SectionExperience from '../../Components/AboutSections/SectionExperience'
import SectionProtetcion from '../../Components/AboutSections/SectionProtetcion'
import SectionAdjusts from '../../Components/AboutSections/SectionAdjusts'
import SectionAccelelrating from '../../Components/AboutSections/SectionAccelelrating'

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <SectionAboutUs/>
        <SectionRider/>
        <SectionExperience/>
        <SectionProtetcion/>
        <SectionAdjusts/>
        <SectionAccelelrating/>
        <Footer/>
    </div>
  )
}

export default AboutUs