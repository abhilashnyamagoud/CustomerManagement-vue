<template>
    <div>
    <ul class="nav bg-dark p-3">
  <li class="nav-item">
    <nuxt-link class="nav-link text-light" exact to="/" >Customers</nuxt-link>
  </li>
   <li class="nav-item">
    <nuxt-link class="nav-link text-light" exact to="/order" >Orders</nuxt-link>
  </li>
   <li class="nav-item">
    <nuxt-link class="nav-link text-light" exact to="/" @click="runLogout" >Logout</nuxt-link>
  </li>
</ul>
    </div>
</template>
<script>
export default {
    methods:{
      runLogout(){
        this.$store.commit('removeUser')
      }
    },
}
</script>
<style lang="">
    
</style>