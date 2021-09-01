<template>
  <div class="country-details">
    {{ country.name }}
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      country: {}
    }
  },
  created() {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + this.$route.params.name)
      .then(response => {
        this.country = response.data[0]
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style lang="scss" scoped>

</style>