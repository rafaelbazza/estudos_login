/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = (props) => {
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
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="ex:youremail@email.com" id="email" name="email" onChange={handleEmilChange} />

                <label htmlFor="password">PassWord</label>
                <input value={pass} type="password" placeholder="**********" id="password" name="password" onChange={handlePassChange} />

                <button type="submit">Log In</button>

            </form>

            <Link to="/register"><button >
                Don't have an account? Register here
                </button></Link>

        </div>
  )
}

export default LoginForm
