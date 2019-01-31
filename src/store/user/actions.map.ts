import { User } from '@/interface/i-user';

export const setUser = (user: User) => ({ type: 'user/setUser', user })
