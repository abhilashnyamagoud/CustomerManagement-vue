<template>
    <div>
        <AppMenu/>
        <div class="container">
            <h1 class="display-3 mb-3 text-dark">All Customers Orders </h1>
            <input type="text" class="form-control col-md-6 p-4" placeholder="search by name" v-model="search"  />
             <div v-for="cust in filteredCustomers" :key="cust.id">
                         <h2> {{cust.name}} </h2>
                         <table class="table table-striped table-info table-hover">
                             <thead>
                             <tr>
                                 <th>Product </th>
                                 <th>Date </th>
                                 <th> Quantity</th>
                                 <th>Price </th>
                                 <th>Total</th>
                             </tr>
                             </thead>
                             <tbody >
                                 <tr  v-for="order in cust.orders" :key="order.id">
                                   <td>{{order.product}} </td>
                                   <td>{{order.date}} </td> 
                                   <td>{{order.quantity}}</td>
                                   <td>{{order.price}} </td>
                                   <td>{{order.price * order.quantity}} </td>                                
                                 </tr>
                             </tbody>
                         </table>
             </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

import AppMenu from '../components/AppMenu.vue';

export default {
    data(){
       return{
           search:''
       }
    },
    components:{
        AppMenu
    },
    
    computed:{
        ...mapState(['customers']),
        filteredCustomers(){
        if(this.search){
            return this.customers.filter((el)=>{
                let res=el.name.toLowerCase()
                return res.includes(this.search)
            });
        }
        return this.customers;
    }
    }
}
</script>
<style lang="">
    
</style>