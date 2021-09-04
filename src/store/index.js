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
    }
  },
  actions: {
    toggleDarkMode({commit}) {
      commit('setDarkMode')
    },
    loadCountries({commit}) {
      axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        commit('setCountries', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
