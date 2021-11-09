<template>
<div>
    <div class="container">
        <h1 class="mt-4">Total Customers -{{customers.length}} </h1>
        <div class="row mt-5">
            <h4 class="p-2"><button class="btn btn-secondary btn-outline-primary text-light" @click="toggleHandle">Card View </button> </h4>
            <h4 class="p-2 ml-4"><button class="btn btn-secondary btn-outline-primary text-light" @click="toggleHandleTable" >List View </button>  </h4>
            <h4 class="p-2 ml-4 "><button @click="handleAdd" class="btn btn-secondary btn-outline-primary text-light">Add customer</button>   </h4>
            <div class="col-md-4 mt-2 d-flex justify-content-end">
            <label for="filter" class="h4">Filter: </label>
            <input type="text" v-model="search" class="form-control" placeholder="Search" />
            </div>
        </div>
    </div>
    <CardView v-if="toggle" :datasource="filteredCustomers" />
    <ListView v-if="toggleListView" :datasource="filteredCustomers" />
    <AddCustomer v-if="toggleAdd"/>
</div>
</template>
<script>
// import {mapState} from 'vuex'
import CardView from './CardView.vue';
import ListView from './ListView.vue';
import AddCustomer from './AddCustomer.vue'
export default {
    data(){
        return {
            toggle:true,
            toggleListView:false,
            toggleAdd:false,
            search:''
        }
    },
    components:{
        CardView,
        ListView,
        AddCustomer
    },
    methods:{
        toggleHandle(){
            this.toggle=true
            this.toggleListView=false
            this.toggleAdd=false
        },
        toggleHandleTable(){
            this.toggleListView=true
            this.toggle=false
            this.toggleAdd=false
        },
        handleAdd(){
            this.toggle=false
            this.toggleListView=false
            this.toggleAdd=true
        }
    },
    computed: {
    customers() {
      return this.$store.state.customers;
    },
    // ...mapState(['customers']),
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
<style lang="scss" scoped>
       
</style>