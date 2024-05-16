import React from 'react'
import './Cards.css'
import {  useNavigate } from 'react-router-dom'

function Cards() {
    const navigate= useNavigate()
    return (
        <div className='card' onClick={()=>{
            navigate('/courts/courtdetails')
        }}>
            <img src="" alt="" />
            <div className='card-content'>
                <h2>Court Name</h2>
                <p>
                    location
                    <br />
                    Lets play the game
                </p>

            </div>
        </div>
    )
}

export default Cards