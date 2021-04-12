<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  $image-path: '~@/../mdb/mdbvue/img';

  @import '~@/../mdb/mdbvue/scss/mdb-free.scss';
</style>
