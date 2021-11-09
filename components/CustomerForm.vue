<template>
    <div class="container mt-2">
        <h1 class="display-4">Add Customer </h1>
        <form @submit="onSubmit">
            <div class="row">
                <div class="col-md-8">
                 <label for='name'>Name</label>
                 <input v-model="form.name" type="text" placeholder="Enter Name" class="form-control p-4" />
                </div>
            </div>
             <div class="row mt-2">
                <div class="col-md-8">
                 <label for='email'>Email</label>
                 <input v-model="form.email" type="email" placeholder="Enter Email" class="form-control p-4" />
                </div>
            </div>
             <div class="row mt-2">
                <div class="col-md-8">
                 <label for='phone'>Phone</label>
                 <input v-model="form.phone" type="text" placeholder="Enter Phone" class="form-control p-4" />
                </div>
            </div>
             <div class="row mt-2">
                <div class="col-md-8">
                 <label for='country'>Country</label>
                 <input v-model="form.country" type="text" placeholder="Enter Country" class="form-control p-4" />
                </div>
            </div>
             <div class="row mt-4">
                <div class="col-md-8">
                 <input type="submit" value="submit"  class="form-control btn btn-primary btn-lg" />
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                name:'',
                email:'',
                country:'',
                phone:''
            }
        }
    },
    methods:{
        onSubmit(event){
            event.preventDefault()
            const formData={
                id:new Date().getTime(),
                name:this.form.name,
                email:this.form.email,
                country:this.form.country,
                phone:this.form.phone
            }
             this.$store.commit('addCustomer',formData);
                    swal({
                     title:"Congrats",
                     text:"You Added Record" ,
                     icon:"success",
                     buttons:"Ok"
})
             this.form.name=''
             this.form.email=''
             this.form.country=''
             this.form.phone=''
        }
    }
}
</script>
<style lang="">
    
</style>