/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from './TextField'
import Button from './ButtonComponent'

const Register = (props) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    setPass(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      {
        name,
        email,
        pass
      }
    )
    setEmail('')
    setName('')
    setPass('')
    return navigate('/')
  }
  return (

    <div> <form onSubmit={handleSubmit}>

      <TextField

        title="Full Name"
        type="text"
        htmlfor="name"
        id="name"
        placeholder="Full Name"
        value={name}
        onchange={handleNameChange}

      />

      <TextField

        title="Email"
        type="email"
        htmlfor="email"
        id="email"
        placeholder="ex:youremail@email.com"
        value={email}
        onchange={handleEmailChange}

      />

      <TextField

        title="PassWord"
        type="password"
        htmlfor="password"
        id="password"
        placeholder="************"
        value={pass}
        onchange={handlePassChange}

      />

      <Button
        type="submit"
        title="Register"
      />

    </form>
      <Link to="/">
        <Button
        title="Already have an account? Log in here"
        />
      </Link>
    </div>)
}
export default Register
