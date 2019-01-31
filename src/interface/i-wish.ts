import { User } from './i-user';

export interface Wish {
  id: string
  title?: string,
  description?: string,
  creator?: User,
  contributors: Array<User>,
  imageUrl?: string,
  averagePrice?: number,
  links?: Array<string>
}
