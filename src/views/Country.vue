<template>
  <div class="country-details">
    <button class="country-details__backButton" @click="$router.push('/')">Back</button>
    <div class="country-details__infos-container">
      <img :src="country.flag" :alt="flagAlt">
      <div class="country-details__infos-wrapper">
        <h4 class="country-details__name">{{ country.name }}</h4>
        <div class="country-details__infos-row">
          <div class="country-details__infos">
            <h6 class="country-details__nativeName">Native Name: <span>{{ country.nativeName }}</span></h6>
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
        </div>
        <div class="country-details__borders-container">
          <h5 class="country-details__borders">Border Countries:</h5>
          <div class="country-details__buttons">
            <button
              v-for="border in borders" 
              :key="border.name"
              @click="goToCountry(border.iso3)"
            >
              {{ border.name }}
            </button>
          </div>
        </div>
      </div>
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
  beforeRouteUpdate (to, from, next) {
    this.code = to.params.code;
    next();
  },
  beforeMount() {
    axios
      .get('https://restcountries.eu/rest/v2/alpha/' + this.$route.params.code)
      .then(response => {
        this.country = response.data
        this.topLevelDomain = response.data.topLevelDomain[0]
        this.languages = this.getAllLanguages();
        this.currencies = this.getAllCurrencies();
        this.borders = this.getAllBorders();
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    flagAlt() {
      return this.country.name + "'s flag"
    }
  },
  methods: {
    goToCountry: function(iso3) {
      this.$router.push('/country/' + iso3)
    },
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
          borderCountries.push({
            name: this.countriesISO[i].name,
            iso3: this.countriesISO[i].alpha3.toUpperCase()
          })
        }
      }
      return borderCountries;
    }
  }
}
</script>

<style lang="scss" scoped>

.country-details {
  padding: 0 5%;
  margin-bottom: 6rem;
  .country-details__backButton {
    margin: 4rem 0;
    padding: 1rem 2rem;
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
  .country-details__name {
    font-family: $font800;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .country-details__infos {
    margin: 4rem 0;
    h6 {
      // margin: 0;
      font-family: $font600;
      span {
        font-family: $font300;
      }
    }
  }
  .country-details__borders-container {
    margin: 3rem 0;
    h5 {
      font-family: $font600;
    }
    .country-details__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; 
      gap: 10px;
      margin-top: 2rem;
    }
  }
}

@media screen and (min-width:640px) {
.country-details__infos-container {
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
  img {
    margin: 0;
    // max-width: 50%;
    // height: min-content;
  }
  .country-details__infos-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .country-details__infos-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .country-details__infos {
        margin: 0;
      }
    }
  }

}
}

</style>