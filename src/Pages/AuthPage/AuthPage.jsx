import React, { useState } from 'react'
import './AuthPage.css'
import Image from '@Assets/basketball-net-from-below.jpg'
import LogIn from '../../Components/AuthBox/LogIn'
import SignUp from '../../Components/AuthBox/SignUp'

function AuthPage() {
    const [boxType,setBoxType]=useState('login')
    return (
        <div>
            <div className='container-fluid'>
              
                <div className='row'>
                    <div className='col-md-6 left-image' style={{ backgroundImage: `url(${Image})` }}>
                       <p>Reserve your spot, create memories, and let the game begin!</p>
                    </div>
                    <div className='col-md-6 right-image'>
                        <h3 className='w-100 text-center mt-4 mb-4'>
                            {boxType==='login'?'login':'Signup'}
                        </h3>
                        {boxType==='login'? <LogIn setBoxType={setBoxType} />:<SignUp setBoxType={setBoxType} />}

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AuthPage