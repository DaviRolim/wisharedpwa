import * as type from './mutations.map'

export default {
  [type.SET_AUTH_CREDENTIALS] (state, payload) {
    state.authCredentials = payload
  }
}
