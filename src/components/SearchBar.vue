<template>
  <div id="searchBar">
    <ion-icon name="search"></ion-icon>
    <input type="text" placeholder="Search for a country...">
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style lang="scss" scoped>

#searchBar {
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 4px rgba(123, 123, 123, 0.1);
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 6px;
  padding: 0 20px;
  margin-bottom: 4rem;
  ion-icon {
    font-size: 2rem;
    color: $lightInput;
  }
  input {
    flex: 1;
    background: none;
    border: 0;
    outline: 0;
    border-radius: 6px;
    padding: 2rem;
    color: $lightInput;
    font-family: $font600;
  }
}

@media screen and (min-width:640px) {

#searchBar {
  width: 40%;
  margin-bottom: 0;
}

}

</style>