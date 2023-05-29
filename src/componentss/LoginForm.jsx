/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from './TextField'
import Button from './ButtonComponent'
import UserService from '../services/userservice'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleEmilChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    setPass(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // entender o erro do await
    const loggedIn = await UserService.login(
      email,
      pass
    )
    if (loggedIn) {
      setEmail('')
      setPass('')
    }
  }
  return (

    <div className='login-form'>
      <form className="form" onSubmit={handleSubmit}>

        <TextField
          placeholder="ex:youremail@email.com"
          html="email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmilChange}
        />

        <TextField
          placeholder="************"
          html="password"
          id="password"
          type="password"
          name="password"
          value={pass}
          onChange={handlePassChange}
        />

        <Button
          type="submit"
          title="Log In"
        />

        <Link className='link-switch' to="/register">
          "Don't have an account? Register here"
        </Link>

      </form>

    </div>
  )
}

export default LoginForm
