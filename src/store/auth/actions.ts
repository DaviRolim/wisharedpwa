import axios from 'axios'

import * as type from './mutations.map'
import * as userActions from '@/store/user/actions.map'
import {userService} from '@/service/user-service'

export default {
  async setAuthCredentials ({ commit, dispatch }, { authCredentials }) {
    commit(type.SET_AUTH_CREDENTIALS, authCredentials)
    const token = authCredentials.token
    axios.defaults.headers.common['x-access-token'] = `${token}`
    console.log(authCredentials.token, authCredentials.id);
    const {data} = await userService.fetchUserById(authCredentials.id)
    console.log(data);
    dispatch(userActions.setUser(data), { root: true })
  },
}
