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


    @media screen and (min-width: 1000px){
       .align{
        padding-left: 200px;
        padding-right: 200px;
    }
       .row{
            /* padding: 0,200px,0,200px; */
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 20px;
    }
     
    }
     @media screen and (min-width: 500px) and (max-width:1000px) {
       .align{
        padding-left: 100px;
        padding-right: 100px;
    }
       .row{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 20px;
    }
     
    }

     

    
   
</style>