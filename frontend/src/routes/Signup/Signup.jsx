import React from 'react'
import './signup.css'
import { SignUp } from '@clerk/clerk-react'

const Signup = () => {
  return (
    <div className='signUpPage'>
   <SignUp path='/sign-up' signInUrl='/sign-in'/>
      
    </div>
  )
}

export default Signup
