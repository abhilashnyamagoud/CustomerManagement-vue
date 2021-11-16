<template>
  <div>
    <!-- <AppMenu/> -->
    <homepage></homepage>
  </div>
</template>

<script>
import homepage from './homepage.vue';
// import AppMenu from '../components/AppMenu.vue';

export default {
  components: { 
    homepage ,
    // AppMenu
  }
  }
</script>

<style>
body{
  margin: 0;
  padding: 0;
  zoom: 80%;
}
</style>
