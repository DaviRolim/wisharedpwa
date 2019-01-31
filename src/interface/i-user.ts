import { Wish } from './i-wish';

export interface User {
  id: string,
  email?: string,
  password?: string,
  name?: string,
  wishes?: Array<Wish>,
  contributing?: Array<Wish>,
  favorites?: Array<User>
}
