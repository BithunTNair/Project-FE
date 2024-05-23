import React, { useState } from 'react'
import './LogSign.css'
import Input from '../Common/InputField/Input'
import { ErrorToast, successToast } from '../../Plugins/Toast/Toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setUserData } from '../../Redux/userSlice'
import { useDispatch } from 'react-redux'
import { showorhideLoader } from '../../Redux/generalSlice'

function LogIn({ setBoxType }) {
  const [loginData, setLoginData] = useState({})
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }
  const doLogin = () => {
    dispatch(showorhideLoader(true))
    axios({
      method: 'POST',
      url: process.env.REACT_APP_BASE_URL + '/auth/dologin',
      data: loginData
     
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user',JSON.stringify( res.data.user))
      dispatch( setUserData(res.data.user))   
      navigate('/home')
      dispatch(showorhideLoader(false))
      successToast(res.message)
    })
      .catch((err) => {
        dispatch(showorhideLoader(false))
        ErrorToast(err?.response?.data.message || 'something went wrong')
      })
  }
  return (
    <>
      <div className='d-flex flex-column'>
        <div>
          <Input type={'email'} label={'Email'} value={loginData.email} name={'email'} onchange={handleLogin}/>
        </div>

        <div className=' mt-4' >
          <Input type={'password'} label={'Password'} value={loginData.password} name={'password'} onchange={handleLogin} />
        </div>
        <button className='common-btn mt-4 align-self-center' onClick={doLogin}>LogIn</button>
        <p className='account-exist mt-4'>Don't have an account? <i className='icn' onClick={() => setBoxType('Signup')}>Signup here</i></p>
      </div>


    </>
  )
}

export default LogIn