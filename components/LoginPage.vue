<template>
<div>
    <div v-if="user.length">
        <!-- <div v-if="isSubmitted"> -->
     <AppMenu/>
    <CustomerList />
    </div>
    <div v-else>
    <div class="container mt-5" >
        <h1 class="display-2 text-dark">  Login  </h1>
        <div class="card p-5 mt-5 bg-light">
        <form @submit="onSubmit">
            <div class="row mt-5">
                    <div class="col-md-2">
                        <label for="email" class="h2 text-muted">Email:</label>
                    </div>
                    <div class="col-md-8">
                         <input v-model="form.email" type="email" class="form-control p-4"  placeholder="Enter Email" />
                         <span class="text-muted ml-2">We Do Not Share Your Information </span>
                    </div>
            </div>
             <div class="row mt-5">
                    <div class="col-md-2">
                        <label for="password" class="h2 text-muted">password:</label>
                    </div>
                    <div class="col-md-8">
                         <input v-model="form.password" type="password" class="form-control p-4" placeholder="Enter password" />
                    </div>
            </div>
            <div class="d-grid d-md-flex justify-content-md-center">
                 <button class="btn btn-primary btn-lg mt-4" type="submit">Login </button>
            </div>
        </form>
        </div>
    </div>
    </div>
</div>
</template>
<script>

import {mapState} from 'vuex';
import CustomerList from './CustomerList.vue'
import AppMenu from './AppMenu.vue';
import swal from 'sweetalert';
import validator from 'validator'

export default {
    data(){
        return {
            form:{
                email:'',
                password:''
            },
             isSubmitted:true,
        }
    },
    components:{
        CustomerList,
        AppMenu
    },
    methods:{
        onSubmit(event) {
        event.preventDefault()
        const formData={
            email:this.form.email,
            password:this.form.password
        }
        // localStorage.setItem('user',JSON.stringify(formData))
        if(validator.isEmail(this.form.email) && this.form.password.length>0){
            //   this.isSubmitted=true
            swal("Good job!", "You Logged in !", "success");
              this.$store.commit('addUser',formData)
              this.form.email=''
              this.form.password=''
        }else{
            swal('Email Or Password invalid')
        }
            // if(JSON.parse(localStorage.getItem('user'))){
            //      this.isSubmitted=true
            // }   
      }
    },
    computed:{
        ...mapState(['userdata']),
        user(){
            return this.$store.state.userdata
        }    
    },    
}
</script>
<style lang="scss">
    
</style>