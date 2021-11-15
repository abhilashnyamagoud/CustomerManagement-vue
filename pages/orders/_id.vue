<template>
    <div >
        <AppMenu/>
         <div class="container mt-5">
             <h1>{{ filteredValue.name}}, Total orders are {{filteredValue.orders.length}} Numbers </h1>
             <button class="btn btn-lg btn-secondary"><nuxt-link to="/" class="text-light">Back</nuxt-link> </button>
             <table class="table table-hover table-striped mt-5 table-bordered">
                             <thead>
                             <tr>
                                 <th>Product </th>
                                 <th>Date </th>
                                 <th> Quantity</th>
                                 <th>Price </th>
                                 <th>Total</th>
                             </tr>
                             </thead>
                             <tbody>
                                 <tr v-for="order in filteredValue.orders" :key="order.id">
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
</template>
<script>
import AppMenu from "@/components/AppMenu.vue";
import {mapState} from 'vuex';
export default {
    components:{
        AppMenu
    },
    data(){
        return{
            id:this.$route.params.id
        }
    },
    computed:{
        ...mapState(["customers"]),
        filteredValue(){
        return this.customers.find((ele)=>{
            // console.log(ele)
                return ele.id==this.id
            })
        }
    },
     
}
</script>
<style lang="css" scoped>

    
</style>