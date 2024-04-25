import React from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'

function LogIn({setBoxType}) {
  return (
    <>
      <div className='d-flex flex-column'>
        <div>
          <Input label={'Email'} value={null}/>
        </div>


        <div className=' mt-4' >
          <Input label={'Password'} value={null} />
        </div>
        <button className='common-btn mt-4 align-self-center'>LogIn</button>
        <p className='account-exist mt-4'>Don't have an account? <i onClick={()=>setBoxType('signup')}>Signup here</i></p>
      </div>


    </>
  )
}

export default LogIn