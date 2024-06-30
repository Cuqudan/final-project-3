import React from 'react'
import Header from '../../Components/Header/Header'
import SectionAbout from '../../Components/AboutSections/SectionAbout'
import SectionRideability from '../../Components/AboutSections/SectionRideability'
import Footer from "../../Components/Footer/Footer";
import SectionAboutImages from '../../Components/AboutSections/SectionAboutImages';
import SectionStandarts from '../../Components/AboutSections/SectionStandarts';
import SectionPure from '../../Components/AboutSections/SectionPure';

const AboutMe = () => {
  return (
    <div>
        <Header/>
        <SectionAbout/>
        <SectionRideability/>
        <SectionPure/>
        <SectionAboutImages/>
        <SectionStandarts/>
        <Footer />
    </div>
  )
}

export default AboutMe