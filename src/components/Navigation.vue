<template>
  <mdb-container>
    <mdb-navbar class="header-navbar" color="#FF5722">
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        <a class="link" href="/home">ResaVue</a>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
        </mdb-navbar-nav>
        <form>
          <input class="mr-5 search-header_input" style="max-width: 300px;" v-model="nameSearchValue" placeholder="Rechercher par nom">
          <input class="mr-5 search-header_input" style="max-width: 150px;" v-model="locationSearchValue" placeholder="Par ville">
          <button class="search-header_button" v-on:click="getSearchRestaurants()">Chercher</button>
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </mdb-container>
</template>

<script>
  import { mdbNavbar, mdbContainer, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav } from 'mdbvue'

  export default {
    name: 'Navigation',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbContainer
    },
    data() {
      return {
        'nameSearchValue': '',
        'locationSearchValue': '',
      }
    },
    methods: {
      getSearchRestaurants() {

      },
    },
  }
</script>

<style>
  .container {
    max-width: 100%!important;
    padding: 0!important;
    margin: 0!important;
  }

  .header-navbar {
    background-color: #FF5722;
    color: white;
  }

  .link {
    color: white!important;
  }

  .link:hover {
    opacity: 0.6;
  }

  .container input {
    color: white;
  }
</style>
