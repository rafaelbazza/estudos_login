/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Register from './componentss/registration'
import LoginPage from './pages/LoginPage'
import LoginForm from './componentss/LoginForm'

// 3 estilizar o app
/* Criar componentes FormInput e FormButton
FormInput recebe label como props. Se nada vier nessa propriedade, o label é omitido do componente
FormButton recebe o texto do botão. Esse texto não pode ser nulo. Se nada vier, recebe um texto default

Fazer curso de Sass e aplicar na estrutura

Estilizar tudo e deixar bonita

Estudar Flexbox e grid

grid e mediaquery*
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
            path: '/loginform',
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
