export const state=()=>({
    customers:[{    
                name: "Jonas Chambers",
                phone: "8792655457",
                email: "Jonas@gmail.com",
                country: "India"
            },
            {
                name: "Lael Bolton",
                phone: "8792655457",
                email: "Lael@gmail.com",
                country: "India"
            },
            {
                name: "Reese Romero",
                phone: "8792655457",
                email: "Reese@gmail.com",
                country: "India"
            },
            {
                name: "Shea Flores",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India"
            },
            {
                name: "Jonah Daniel",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India"
            },
            {
                name: "Jona Chambers",
                phone: "8792655457",
                email: "Jonas@gmail.com",
                country: "India"
            },
            {
                name: "Lael Bolto",
                phone: "8792655457",
                email: "Lael@gmail.com",
                country: "India"
            },
            {
                name: "Rees Romer",
                phone: "8792655457",
                email: "Reese@gmail.com",
                country: "India"
            },
            {
                name: "Shea Flore",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India"
            },
            {
                name: "Jonah Danie",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India"
            }],
    userdata:[],

})


export const mutations={
    addUser:(state,formInput)=>{
        state.userdataformInput
    },
    addCustomer:(state,formOut)=>{
        state.customers.push(formOut)
    }
}