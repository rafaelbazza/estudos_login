/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextField from './TextField'
import Button from './ButtonComponent'
import { users } from '../utils/data/users'
import toast, { Toaster } from 'react-hot-toast'

const Register = () => {
  console.log(users)
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

    const newUser = { name, email, pass }

    users.push(newUser)

    console.log(
      {
        users
      }
    )
    setEmail('')
    setName('')
    setPass('')
    return navigate('/')
  }
  return (

    <div className='login-form'> <form className="form" onSubmit={handleSubmit}>

      <TextField

        type="text"
        htmlfor="name"
        id="name"
        placeholder="Full Name"
        value={name}
        onChange={handleNameChange}

      />

      <TextField

        type="email"
        htmlfor="email"
        id="email"
        placeholder="ex:youremail@email.com"
        value={email}
        onChange={handleEmailChange}

      />

      <TextField

        type="password"
        htmlfor="password"
        id="password"
        placeholder="************"
        value={pass}
        onChange={handlePassChange}

      />

      <Button
        type="submit"
        title="Register"
      />

      <Link className='link-switch' to="/">

       "Already have an account? Log in here"

      </Link>
      <Toaster/>
      </form>

    </div>)
}
export default Register
