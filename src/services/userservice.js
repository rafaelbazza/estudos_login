
import toast from 'react-hot-toast'
import { users } from '../utils/data/users'

const UserService = {
  login: async (email, pass) => {
    try {
      let userFound = false
      // substituir por um for por conta de forEach ser assincrono
      users.forEach(user => {
        console.log(pass)
        if (email === user.email && pass === user.pass) {
          userFound = true
          // break --- no foreach nao se usa o break, solucionar
        }
      })
      // conselo dos toasts para fazer funcionar
      if (userFound) {
        toast.success('Usuário encontrado!')
      } else {
        toast.error('Usuário não encontrado!')
      }
      return true
      // return { success: true, message: 'Login Successfull', user: response.data }
    } catch (error) {
      return false
      /* let errorMessage
                  if (error.response && error.response.data) {
                    errorMessage = error.response.data.error
                  } else {
                    errorMessage = 'Connection failed'
                  }
                  toast.error(errorMessage)
                  return {
                    status: false,
                    message: errorMessage,
                    user: null
                  } */
    }
  }
}

export default UserService
