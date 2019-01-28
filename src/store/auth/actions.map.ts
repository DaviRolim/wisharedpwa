import { authCredentials } from '@/interface/i-auth';

export const setAuthCredentials = (authCredentials: authCredentials) => ({ type: 'auth/setAuthCredentials', authCredentials })
