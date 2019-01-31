import * as type from './mutations.map'

export default {
  [type.SET_USER] (state, payload) {
    state.user = payload
  }
}
