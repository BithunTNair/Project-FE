import React from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'

function SignUp({ setBoxType }) {
  return (
    <div>
      <div className='d-flex flex-column'>
        <div>
          <Input label={'Name'} value={null} />
        </div>
        <div className=' mt-4' >
          <Input label={'Email'} value={null} />
        </div>
        <div className=' mt-4' >
          <Input label={'Mobile Number'} value={null} />
        </div>
        <div className=' mt-4' >
          <Input label={'Password'} value={null} />
        </div>
        <div className=' mt-4' >
          <Input label={'Confirm Password'} value={null} />
        </div>
        <button className='common-btn mt-4 align-self-center'>Signup</button>
        <p className='account-exist mt-4'>Already have an account? <i onClick={() => setBoxType('signup')}>Login here</i></p>
      </div>
    </div>
  )
}

export default SignUp