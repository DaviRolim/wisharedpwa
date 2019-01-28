import * as type from './mutations.map'
export default {
  setAuthCredentials ({ commit }, { authCredentials }) {
    commit(type.SET_AUTH_CREDENTIALS, authCredentials )
  }
}
