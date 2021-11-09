<template>
    <div class="align mt-5">
        <div class="row">
        <div v-for="cust in datasource" :key="cust.id">
          <div class="allign" >
              <div class="card p-3 bg-secondary">
                  <div class="card-header bg-secondary">
              <h3>{{cust.name}} </h3>
                  </div>        
                  <div class="card-body bg-info">
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
    },
    props:{
        datasource:{
            type:[Array,Object], 
        }
    },
}
</script>
<style lang="css" scoped>
    @media (min-width: 600px){
        .align{
        margin-left: 200px;
        margin-right:auto
    }
     .allign{
        width: 400px;
        /* height: 300px; */
        margin: 10px;
    }
    }
   
    /* .align{
        margin-left: 250px;
        margin-right: 100px;
    } */
   
</style>