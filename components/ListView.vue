<template>
    <div class="container mt-5">
       <div class="row">
           <table class="table table-hover table-striped">
               <thead > 
                   <tr>
                       <th>Customer Name </th>
                       <th>Customer Country </th>
                       <th>Customer Phone </th>
                       <th>Customer Email </th>
                       <th> </th>
                   </tr>
               </thead>
               <tbody>
                   <tr v-for="cust in customers" :key="cust.name">
                       <td>{{cust.name}} </td>
                       <td>{{cust.country}} </td>
                       <td>{{cust.phone}} </td>
                       <td>{{cust.email}} </td>
                       <td> <button class="btn btn-dark p-2">Edit</button> </td>
                       <td> <button @click="showModel(cust)" class="btn btn-dark btn-outline-warning text-light p-2">Show Details</button> </td>
                   </tr>
               </tbody>
           </table>
       </div> 
        
    </div>
</template>
<script>
import swal from 'sweetalert'
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['customers'])
    },
    methods:{
        showModel(cust){
            swal({
       title: cust.name,
       text: cust.country,
       icon:"success",
       buttons:"Ok"
});
        }
    }
}
</script>
<style lang="">
    
</style>