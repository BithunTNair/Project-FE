import React from 'react'
import {Route,Routes} from 'react-router-dom'
import AuthPage from '../Pages/AuthPage/AuthPage'
import Home from '../Pages/Home/Home'


function Routing() {
  return (
    <div>
<Routes>
    <Route path='/' element={<AuthPage/>} />
    <Route path='/home' element={<Home/>}/>
</Routes>
    </div>
  )
}

export default Routing