import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    countries: [],
    darkMode: false
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
    setDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    loadingStatus(state, newloadingStatus) {
      state.loadingStatus = newloadingStatus;
    }
  },
  actions: {
    toggleDarkMode({commit}) {
      commit('setDarkMode')
    },
    loadCountries({commit}) {
      commit('loadingStatus', true)
      axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        commit('setCountries', response.data)
        commit('loadingStatus', false)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
    loadingStatus (state) {
      return state.loadingStatus
    }
  },
  modules: {
  }
})
