import axios from 'axios'
import { authCredentials } from '@/interface/i-auth';

const api = 'http://localhost:3000/api/v1'

class AuthService {
  public signin(email: string, password: string) {
    return axios.post<authCredentials>(`${api}/auth/login`, {email, password})
  }
}

export const authService = new AuthService()
