<template>
  <mdb-container>
    <mdb-navbar class="header-navbar" color="#FF5722">
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        <a class="link" href="/home">ResaVue</a>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
        </mdb-navbar-nav>
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

  .container input {
    color: white;
  }
</style>
