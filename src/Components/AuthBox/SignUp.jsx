import React, { useState } from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'
import { ErrorToast } from '../../Plugins/Toast/Toast'

function SignUp({ setBoxType }) {
  const [signupData, setSignupData] = useState({})
  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  }
  const doSignup = () => {
if(signupData.password===signupData.confirmPassword){
axios({
  method:'GET',
  url:process.env.REACT_APP_BASE_URL+'/auth/dosignup',
  data:signupData
})
}else{
  ErrorToast('Password does not match')
}
  }
  return (
    <div>
      <div className='d-flex flex-column'>
        <div className='mt-4'>
          <Input label={'First Name'} name={'firstName'} value={signupData.firstName} onchange={handleChange} />
        </div>
        <div className='mt-4'>
          <Input label={'Last Name'} name={'lastName'} value={signupData.lastName} onchange={handleChange} />
        </div>
        <div className=' mt-4' >
          <Input label={'Email'} name={'email'} value={signupData.email} onchange={handleChange} />
        </div>
        <div className=' mt-4' >
          <Input label={'Mobile Number'} name={'mobileNumber'} value={signupData.mobileNumber} onchange={handleChange} />
        </div>
        <div className=' mt-4' >
          <Input label={'Password'} name={'password'} value={signupData.password} onchange={handleChange} />
        </div>
        <div className=' mt-4' >
          <Input label={'Confirm Password'} name={'confirmPassword'} value={signupData.confirmPassword} onchange={handleChange} />
        </div>
        <button className='common-btn mt-4 align-self-center' onClick={doSignup}>Signup</button>
        <p className='account-exist mt-4'>Already have an account? <i onClick={() => setBoxType('login')}>Login here</i></p>
      </div>
    </div>
  )
}

export default SignUp