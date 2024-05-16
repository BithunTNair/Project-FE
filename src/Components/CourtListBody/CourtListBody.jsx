import React from 'react'
import './CourtListBody.css'
import Cards from '../Cards/Cards'

function CourtListBody() {
    return (
        <div className='court-list-body d-flex flex-grow-1  flex-wrap justify-content-center overflow-y-auto gap-3 p-3 '>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />

        </div>
    )
}

export default CourtListBody