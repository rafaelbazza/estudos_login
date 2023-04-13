/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = (props) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

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

      <label htmlFor="name">Full Name</label>
      <input type="text" value={name} id="name" placeholder='Full Name' onChange={handleNameChange} />

      <label htmlFor="email">Email</label>
      <input value={email} type="email" placeholder="ex:youremail@email.com" id="email" name="email" onChange={handleEmilChange} />

      <label htmlFor="password">PassWord</label>
      <input value={pass} type="password" placeholder="**********" id="password" name="password" onChange={handlePassChange} />

      <button type="submit">Register</button>

    </form>
      <Link to="/"><button>
        Already have an account? Log in here
      </button></Link>
    </div>)
}
export default Register
