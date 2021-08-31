<template>
  <div id="filterBar">
    <select name="regions" class="filter-region">
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterBar'
}
</script>

<style lang="scss" scoped>

</style>