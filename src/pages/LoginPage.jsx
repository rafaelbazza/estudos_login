
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars

import '../assets/styles/loginpages.css'

// eslint-disable-next-line no-unused-vars
import { Outlet } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className='background-image'>
        <img className="image" src="src\assets\kjh.png" alt="" />
      </div>

       <Outlet/>

    </div>

  )
}

export default LoginPage
