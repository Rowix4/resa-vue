<template>
  <div class="home">
    <Restaurants></Restaurants>
  </div>
</template>

<script>
  import Restaurants from '../components/Restaurants.vue'

  export default {
    name: 'Home',
    components: {
      Restaurants,
    },
  }
</script>

<style>
  .search-header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    z-index: 99;
    color: #FF5722;
  }

  .search-header_background {
    position: relative;
    opacity: 0.7;
    z-index: auto;
    background-image: url("/img/header_background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 600px;
  }

  .search-header_content {
    width: 100%;
    padding-top: 200px;
    font-weight: bold;
    text-align: center;
  }

  .search-header_input {
    background-color: white;
    padding: 10px;
    border-radius: 6px;
  }

  .search-header_button {
    background-color: #FF5722;
    border: 2px solid #FF5722;
    color: white!important;
    padding: 10px;
    border-radius: 6px;
  }

  .search-header_button:hover {
    cursor: pointer;
    color: #FF5722!important;
    background-color: white;
  }
</style>
