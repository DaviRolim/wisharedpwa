import axios from 'axios'
import { authCredentials } from '@/interface/i-auth'

const api = 'http://localhost:3000/api/v1'

class AuthService {
  public signin (email: string, password: string) {
    return axios.post<authCredentials>(`${api}/auth/login`, { email, password }, { headers: { 'Content-type': 'application/json' } })
  }

  public signup (name: string, email: string, password: string) {
    return axios.put<string>(`${api}/auth/login`, { name, email, password }, { headers: { 'Content-type': 'application/json' } })
  }
}

export const authService = new AuthService()
