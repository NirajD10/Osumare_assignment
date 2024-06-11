import React from 'react'
import osumare_logo from '../../assets/Images/Osumare_Logo.png'
import ContactButton from '../Button/ContactButton'
import './Navbar.css'

function Navbar() {
  return (
    <header className='container-padding header'>
        <img src={osumare_logo} alt='Company Logo' className='company-logo'/>
        <ContactButton />
    </header>
  )
}

export default Navbar