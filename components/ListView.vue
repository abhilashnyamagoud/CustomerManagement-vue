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
                   <tr v-for="cust in datasource" :key="cust.id">
                       <td>{{cust.name}} </td>
                       <td>{{cust.country}} </td>
                       <td>{{cust.phone}} </td>
                       <td>{{cust.email}} </td>
                       <td> <button class="btn btn-dark p-2">Edit</button> </td>
                       <td> <button @click="showModel(cust)" class="btn btn-dark btn-outline-danger text-light p-2">Delete</button> </td>
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
    props:{
        datasource:{
            type:[Array,Object], 
        }
    },
    methods:{
        showModel(cust){
            const confirmRemove=window.confirm("Are You Sure")
            if(confirmRemove){
                 this.$store.commit('deleteCust',cust.id);
            swal({
       title: "You deleted the record",
       text: cust.name,
       icon:"success",
       buttons:"Ok"
       });
            }
        }
    }
}
</script>
<style lang="">
    
</style>