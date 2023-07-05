/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Register from './componentss/registration'
import LoginPage from './pages/LoginPage'
import LoginForm from './componentss/LoginForm'

// toast informando que usuario ja existe
// jogar a função de if else dentro userservice para o form(boa pratica)-criar js no utils com funções de notificação
// autenticação -retornar objeto usuario ou objeto vazio e salvar local storage--- gerar token randomico no objeto- type adim/usuario
// editar router -- how to autenticate route em router
// pagina generica pra praticar a autenticação

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
