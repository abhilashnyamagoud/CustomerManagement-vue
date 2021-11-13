<template>
    <div>
        <AddCustomer />
    </div>
</template>
<script>
import AddCustomer from './AddCustomer.vue'
export default {
    components:{
        AddCustomer
    },
    props:{
        toggle:{
            type:Boolean
        }
    }
    

}
</script>
<style lang="">
    
</style>