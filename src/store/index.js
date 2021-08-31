import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    countries: []
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    }
  },
  actions: {
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
