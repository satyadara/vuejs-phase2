import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const user = new Vuex.Store({
  state: {
    id: ''
  },
  mutations: {
    setId (state, id) {
      state.id = id
    }
  },
  getters: {
    getId: (state) => {
      return state.id
    }
  },
  actions: {
    doAlert: () => {
      alert('Alert here')
    },
    setId: ({commit}, id) => {
      commit('increment')
    }
  }
})

export default user

