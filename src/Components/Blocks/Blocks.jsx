import React from 'react'
import './Blocks.css'
import Search from '@Assets/search-globe-svgrepo-com.svg'
import Book from '@Assets/appointments-svgrepo-com.svg'
import Play from '@Assets/sports-soccer-svgrepo-com.svg'

function Blocks() {
    return (
        <div className='d-flex flex-column flex-md-row justify-content-center w-100 h-50 mt-3 blocks'>
            <div className='d-flex flex-column align-items-center text-center text-break p-3'>
                <img src= {Search} alt="" />
                <h3>Search</h3>
                <p>
                    Are you looking to play after work, organize your Sunday Five's
                    football match? Explore the largest network of sports facilities
                    whole over the India
                </p>
            </div>
            <div className='d-flex flex-column align-items-center text-center text-break p-3'>
                <img src= {Book} alt="" />
                <h3>Book</h3>
                <p>
                    Once you’ve found the perfect ground, court or gym, Connect with the
                    venue through the Book Now Button to make online booking & secure
                    easier payment
                </p>
            </div>
            <div className='d-flex flex-column align-items-center text-center text-break p-3'>
                <img src= {Play} alt="" />
                <h3>Play</h3>
                <p>
                    You’re the hero, you’ve found a stunning turf or court, booked with
                    ease and now its time to play. The scene is set for your epic match.
                </p>
            </div>
        </div>
    )
}

export default Blocks