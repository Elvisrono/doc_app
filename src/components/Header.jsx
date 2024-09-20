import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
      <div>
        <p>
           Book Apointment <br />With Trusted Doctors 
        </p>
      </div>
      <div>
        <img src={assets.group_profiles} alt='' />
        <p>Simply browse through our extentive list of trusted doctors, <br /> schedule</p>
      </div>
      <a href=''>
        Book Appointment <img src={assets.arrow_icon} alt=''/>
      </a>
    </div>
  )
}

export default Header
