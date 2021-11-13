<template>
    <div class="container mt-5">
        <div v-if="toggleEdit">
             <button class="btn btn-lg btn-danger" @click="handleEdit">Cancel </button>
         <EditCustomer  :toggle='toggleEdit' /> 
        </div>
       <div v-else class="row">
           <table class="table table-hover table-striped">
               <thead > 
                   <tr>
                       <th>Customer Name </th>
                       <th>Customer Country </th>
                       <th>Customer Phone </th>
                       <th>Customer Email </th>
                       <th> </th>
                       <th></th>
                   </tr>
               </thead>
               <tbody>
                   <tr v-for="cust in datasource" :key="cust.id">
                       <td>{{cust.name}} </td>
                       <td>{{cust.country}} </td>
                       <td>{{cust.phone}} </td>
                       <td>{{cust.email}} </td>
                       <td><nuxt-link :to="`/orders/${cust.id}`" class="btn btn-dark p-2">Show Orders</nuxt-link> </td>
                       <td> <button @click="showModel(cust)" class="btn btn-dark btn-outline-danger text-light p-2">Delete</button> </td>
                       <td> <button @click="handleEdit(cust)" class="btn btn-dark btn-outline-success text-light btn-lg p-2">Edit</button>  </td>
                   </tr>
               </tbody>
           </table>
       </div> 
        
    </div>
</template>
<script>
import swal from 'sweetalert'
import {mapState} from 'vuex'
import EditCustomer from './EditCustomer.vue'
export default {
    components:{
        EditCustomer
    },
    data(){
        return{
            toggleEdit:false
        }
    },
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
        },
        handleEdit(cust){
            console.log(cust)
            this.toggleEdit=!this.toggleEdit
        }
    }
}
</script>
<style lang="">
    
</style>