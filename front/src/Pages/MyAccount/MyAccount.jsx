import React from 'react'
import HeaderContact from '../../Components/Header/HeaderContact'
import SectionMyAccount from '../../Components/AccountSections/SectionMyAccount'
import Footer from "../../Components/Footer/Footer"
import SectionProfile from '../../Components/AccountSections/SectionProfile'
const MyAccount = () => {
  return (
    <div>
        <HeaderContact/>
        <SectionMyAccount/>
        <SectionProfile/>
        <Footer/>
    </div>
  )
}

export default MyAccount