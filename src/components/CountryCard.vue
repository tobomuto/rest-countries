<template>
  <div class="country">
    <div class="country__infos">
      <h4 class="country__name">Country Name</h4>
      <h6 class="country__population">Population: <span>population</span></h6>
      <h6 class="country__region">Region: <span>region</span></h6>
      <h6 class="country__capital">Capital: <span>capital</span></h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard'
}
</script>

<style lang="scss" scoped>

.country {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  border-radius: 8px;
  .country__infos {
    padding: 3rem 3rem 5rem 3rem;
    .country__name {
      font-family: $font800;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    h6 {
      margin: 0;
      font-family: $font600;
      span {
        font-family: $font300;
      }
    }
  }

}

</style>