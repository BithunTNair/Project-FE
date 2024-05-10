import React from 'react'
import './Home.css'
import NavBar from '../../Components/Common/NavBar/NavBar'
import Carousal from '../../Components/Carousal/Carousal'
import Blocks from '../../Components/Blocks/Blocks'
import UspBlocks from '../../Components/uspBlocks/UspBlocks'

function Home() {
    return (
        <div>
            <NavBar />
            <Carousal/>
            <Blocks/>
            <UspBlocks/>
        </div>
    )
}

export default Home