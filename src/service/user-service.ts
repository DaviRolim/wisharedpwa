
import axios from 'axios'
import { User } from '@/interface/i-user';

const api = 'http://localhost:3000/api/v1'

class UserService {
  public fetchUserById (id: string) {
    return axios.get<User>(`${api}/users/${id}`)
  }

  public fetchUsersByName (name: string, email: string, password: string) {
    return null
  }
}

export const userService = new UserService()
