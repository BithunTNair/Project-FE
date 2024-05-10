import React from 'react'
import './UspBlocks.css'
import userImg from '@Assets/users-2-svgrepo-com.svg'
import location from '@Assets/locations-svgrepo-com.svg'
import support from '@Assets/always-hours-service-svgrepo-com.svg'
import offer from '@Assets/offer-svgrepo-com.svg'
import football from '@Assets/football-svgrepo-com.svg'

function UspBlocks() {
  return (
    <div className='d-flex flex-wrap justify-content-center mt-3 usp-blocks-container gap-3'>
        <div className='usp-blocks text-center'>
            <h4>10000+</h4>
            <p>Happy Customers</p>
            <img src={userImg}  height='40px' alt="" />

        </div>
        <div className='usp-blocks text-center'>
            <h4>100+ Locations</h4>
            <p>Available 20+ States in India</p>
            <img src={location} height='40px' alt="" />

        </div>
        <div className='usp-blocks text-center'>
            <h4>24/7 Access</h4>
            <p>Choose Favorite Slots</p>
            <img src={support} height='40px' alt="" />

        </div>
        <div className='usp-blocks text-center'>
            <h4>Welcome Offers</h4>
            <p>Get Free Access To All Courts</p>
            <img src={offer} height='40px' alt="" />

        </div>
        <div className='usp-blocks text-center'>
            <h4> Free And Rented Accessories</h4>
            <img src={football} height='40px' alt="" />

        </div>




    </div>
  )
}

export default UspBlocks