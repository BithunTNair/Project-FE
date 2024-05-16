import React from 'react'
import NavBar from '../../Components/Common/NavBar/NavBar'
import CourtListBody from '../../Components/CourtListBody/CourtListBody'

function CourtListPage() {
  return (
    <div className='d-flex flex-column'>
        <NavBar/>
        <CourtListBody/>
    </div>
  )
}

export default CourtListPage