<template>
  <div class="country-details">
    <button @click="$router.push('/')">Back</button>
    <img :src="country.flag" :alt="flagAlt">
    <div class="country-details__infos">
      <h4 class="country-details__name">{{ country.name }}</h4>
      <h6 class="country-details__nativeName">Native Name: {{ country.nativeName }}</h6>
      <h6 class="country-details__population">Population: <span>{{ country.population }}</span></h6>
      <h6 class="country-details__region">Region: <span>{{ country.region }}</span></h6>
      <h6 class="country-details__subrRegion">Sub Region: <span>{{ country.subregion }}</span></h6>
      <h6 class="country-details__capital">Capital: <span>{{ country.capital }}</span></h6>
    </div>
    <div class="country-details__infos">
      <h6 class="country-details__domain">Top Level Domain: <span>{{ topLevelDomain }}</span></h6>
      <h6 class="country-details__currencies">Currencies: <span>{{ currencies }}</span></h6>
      <h6 class="country-details__languages">Languages: <span>{{ languages }}</span></h6>
    </div>
    <div class="country-details__borders-container">
      <h5 class="country-details__borders">Border Countries:</h5>
      <button v-for="border in borders" :key="border.name">{{ border.name }}</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

import countriesISO from "@/assets/countriesISO.json";

export default {
  data () {
    return {
      countriesISO: countriesISO,
      country: {},
      topLevelDomain: [],
      currencies: [],
      languages: [],
      borders: []
    }
  },
  beforeMount() {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + this.$route.params.name)
      .then(response => {
        this.country = response.data[0]
        this.topLevelDomain = response.data[0].topLevelDomain[0]
        this.languages = this.getAllLanguages();
        this.currencies = this.getAllCurrencies();
        this.borders = this.getAllBorders();
        console.log(this.borders)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    getAllLanguages: function() {
      let languagesNames = []
      for (let i = 0; i < this.country.languages.length; i++) {
        const language = this.country.languages[i].name;
        languagesNames.push(language)
      }
      return languagesNames.join(", ")
    },
    getAllCurrencies() {
      let currenciesNames = []
      for (let i = 0; i < this.country.currencies.length; i++) {
        const currencie = this.country.currencies[i].name;
        currenciesNames.push(currencie)
      }
      return currenciesNames.join(", ")
    },
    getAllBorders() {
      let borderCountries = []
      for (let i = 0; i < this.countriesISO.length; i++) {
        if (this.country.borders.includes(this.countriesISO[i].alpha3.toUpperCase())) {
          borderCountries.push({name: this.countriesISO[i].name})
        }
      }
      return borderCountries;
    }
  }
}
</script>

<style lang="scss" scoped>

.country-details {
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  button {
    margin: 4rem 0;
    padding: 1rem 2rem;
    text-decoration: none;
    font-family: $font300;
    background-color: white;
    width: 120px;
    border: none;
    border-radius: 2px;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.1);
  }
  img {
    margin: 3rem 0;
  }
  .country-details__infos {
    margin: 3rem 0;
    .country-details__name {
      font-family: $font800;
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    h6 {
      // margin: 0;
      font-family: $font600;
      span {
        font-family: $font300;
      }
    }
  }
  .country-details__borders-container {
    h5 {
      font-family: $font600;
    }
  }
}

</style>