import * as type from './mutations.map'

export default {
  async setUser ({ commit }, { user }) {
    commit(type.SET_USER, user)
  },
}
