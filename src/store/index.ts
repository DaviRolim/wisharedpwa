import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import user from './user'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    auth,
    user
  }
})

export default store
