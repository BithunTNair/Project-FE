import React, { useState } from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'

function LogIn({setBoxType}) {
  const [loginData,setLoginData]=useState({})
  const handleLogin=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className='d-flex flex-column'>
        <div>
          <Input label={'Email'} value={loginData.email} name={'email'}/>
        </div>

        <div className=' mt-4' >
          <Input label={'Password'} value={loginData.password} name={'password'} />
        </div>
        <button className='common-btn mt-4 align-self-center'>LogIn</button>
        <p className='account-exist mt-4'>Don't have an account? <i onClick={()=>setBoxType('Signup')}>Signup here</i></p>
      </div>


    </>
  )
}

export default LogIn