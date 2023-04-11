/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './componentss/styles/style.css'

function App () {
  return (
    <div className='app'>
      <div className='app-conteiner'>
<Outlet/>
      </div>
    </div>
  )
}

export default App
