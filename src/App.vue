<template>
<!-- <RouterLink to="/" class="button">Notes</RouterLink>
<br>
<RouterLink to="/stats" class="button">Stats</RouterLink> -->
<NavBar />
<div class="container is-max-desktop px-2 py-2">
  <RouterView/>

</div>
</template>
<script setup>
//const { default: navbarVue } = require('./components/layout/navbar.vue');


//imports
import NavBar from '@/components/layout/NavBar.vue'
//import navbar from './components/layout/navbar.vue';

</script>


<style>

@import 'bulma/css/bulma.min.css';
</style>