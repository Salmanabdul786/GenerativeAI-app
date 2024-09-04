import React from 'react'
import './signin.css'
import { SignIn } from '@clerk/clerk-react'
const Signin = () => {
  return (
    <div className='signInPage'>
      <SignIn path='/sign-in' signUpUrl='/sign-up' forceRedirectUrl='/dashboard'/>
    </div>
  )
}

export default Signin
