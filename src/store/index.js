import Vue from 'vue'
import Vuex from 'vuex'

import standings from './standings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    standings
  }
})
