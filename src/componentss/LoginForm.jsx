/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from './TextField'
import Button from './ButtonComponent'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleEmilChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    setPass(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      {

        email,
        pass
      })

    setEmail('')
    setPass('')
  }
  return (

    <div className='login-form'>
      <form className="form" onSubmit={handleSubmit}>

        <TextField

          title="Email"
          placeholder="ex:youremail@email.com"
          html="email"
          id="email"
          type="email"
          name="email"
          value={email}
          onchange={handleEmilChange}

        />

        <TextField

          title="Password"
          placeholder="************"
          html="password"
          id="password"
          type="password"
          name="password"
          value={pass}
          onchange={handlePassChange}

        />

        <Button

          type="submit"
          title="Log In"

        />

      </form>

      <Link to="/register">

        <a className='link-switch'>"Don't have an account? Register here"</a>

      </Link>

    </div>
  )
}

export default LoginForm
