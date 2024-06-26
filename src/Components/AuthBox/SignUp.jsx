import React, { useState } from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'
import { ErrorToast, successToast } from '../../Plugins/Toast/Toast'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { showorhideLoader } from '../../Redux/generalSlice'

function SignUp({ setBoxType }) {
  const [signupData, setSignupData] = useState({})
  const {showLoader}=useSelector((store=>store.general))
  const dispatch= useDispatch()
  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  }
  const doSignup = () => {
    dispatch(showorhideLoader(true))
if(signupData.password===signupData.confirmPassword){
axios({
  method:'POST',
  url:process.env.REACT_APP_BASE_URL+'/auth/dosignup',
  data:signupData
}).then((res)=>{
  
successToast(res.message)
setBoxType('login')
dispatch(showorhideLoader(false))
})
.catch((err)=>{
  ErrorToast(err?.response?.data.message || 'something went wrong' )
})
}else{
  dispatch(showorhideLoader(false))
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
          <Input type={'email'} label={'Email'} name={'email'} value={signupData.email} onchange={handleChange} />
        </div>
        <div className=' mt-4' >
          <Input type={'number'} label={'Mobile Number'} name={'mobileNumber'} value={signupData.mobileNumber} onchange={handleChange} />
        </div>
        <div className=' mt-4' >
          <Input type={'password'} label={'Password'} name={'password'} value={signupData.password} onchange={handleChange} />
        </div>
        <div className=' mt-4' >
          <Input type={'password'} label={'Confirm Password'} name={'confirmPassword'} value={signupData.confirmPassword} onchange={handleChange} />
        </div>
        <button className='common-btn mt-4 align-self-center' onClick={doSignup}>Signup</button>
        <p className='account-exist mt-4'>Already have an account? <i className='icn' onClick={() => setBoxType('login')}>Login here</i></p>
      </div>
    </div>
  )
}

export default SignUp