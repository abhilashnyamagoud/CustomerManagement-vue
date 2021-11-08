<template>
    <div class="container mt-5">
        <div class="row">
        <div v-for="cust in customers" :key="cust.name">
          <div class="allign" >
              <div class="card align">
                  <div class="card-header bg-secondary">
              <h3>{{cust.name}} </h3>
                  </div>
                  <div class="card-body bg-light">
                    <p>Country: {{cust.country}} </p>
                    <p>Phone: {{cust.phone}} </p>
                    <p>Email:{{cust.email}} </p>  
                  </div>
          </div>
          </div>
        </div>
    </div>
    </div>
</template>
<script>

import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['customers'])
    }
}
</script>
<style lang="css" scoped>
    .allign{
        width: 300px;
        height: 300px;
        margin: 10px;
    }
   
</style>