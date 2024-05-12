import React from 'react'
import {Route,Routes} from 'react-router-dom'
import AuthPage from '../Pages/AuthPage/AuthPage'
import Home from '../Pages/Home/Home'
import NewCourt from '../Pages/NewCourt/NewCourt'


function Routing() {
  return (
    <div>
<Routes>
    <Route path='/' element={<AuthPage/>} />

    <Route path='/home' element={<Home/>}/>



    <Route path='/newcourt' element={<NewCourt/>}/>
</Routes>
    </div>
  )
}

export default Routing