
import { users } from '../utils/data/users'
import toast from 'react-hot-toast'

const UserService = {
  login: async (email, pass) => {
    try {
      let userFound = false

      users.forEach(user => {
        if (email === user.email && pass === user.pass) {
          userFound = true
        }
      })

      // conselo dos toasts para fazer funcionar
      if (userFound) {
        toast.success('Usuário encontrado!')
      } else {
        toast.error('Usuário não encontrado')
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
