/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Register from './componentss/registration'
import LoginPage from './pages/LoginPage'
import LoginForm from './componentss/LoginForm'

/*

   -Na estrutura do html retirar todas divs desnecessarias
   -considerando a hierarquia, criar de maneira pratica, pensando nas minimas telas e maximas telas de responsividade,
   com uso de with e high em porcentagem para os elementos children e vh vw para os elementos parent
   -refatorar componentes para receber valor previo de props ou renderização condicional
   -adicionar fer no projeto e começar a mecher o projeto em uma nova branch para trabalhar com pull request
   -atualizar o que esta sendo feito no trello
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
