/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Register from './componentss/registration'
import LoginPage from './pages/LoginPage'
import LoginForm from './componentss/LoginForm'

// usar consoles e debug para entender porque o toast nao funciona
// integrar com o github, pull request e branch separada
/* - entender async, await e promises
- fazer codigo do toast funcionar
- fazer lintar funcionar (!)
- aprender sobre sass, flexbox e grid

*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
        children: [
          {
            path: '/',
            element: <LoginForm />
          },
          {
            path: '/register',
            element: <Register />
          }

        ]
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
