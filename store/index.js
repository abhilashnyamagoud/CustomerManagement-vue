export const state=()=>({
    customers:[{ 
                id:1,   
                name: "Jonas Chambers",
                phone: "8792655457",
                email: "Jonas@gmail.com",
                country: "India"
            },
            {
                id:2,
                name: "Lael Bolton",
                phone: "8792655457",
                email: "Lael@gmail.com",
                country: "India"
            },
            {
                id:3,
                name: "Reese Romero",
                phone: "8792655457",
                email: "Reese@gmail.com",
                country: "India"
            },
            {
                id:4,
                name: "Shea Flores",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India"
            },
            {
                id:5,
                name: "Jonah Daniel",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India"
            },
            {
                id:6,
                name: "Jona Chambers",
                phone: "8792655457",
                email: "Jonas@gmail.com",
                country: "India"
            },
            {
                id:7,
                name: "Lael Bolto",
                phone: "8792655457",
                email: "Lael@gmail.com",
                country: "India"
            },
            {
                id:8,
                name: "Rees Romer",
                phone: "8792655457",
                email: "Reese@gmail.com",
                country: "India"
            },
            {
                id:9,
                name: "Shea Flore",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India"
            },
            {
                id:10,
                name: "Jonah Danie",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India"
            }],
    userdata:[],

})


export const mutations={
    addUser:(state,formInput)=>{
        state.userdata.push(formInput)
    },
    addCustomer:(state,formOut)=>{
        state.customers.push(formOut)
    },
    deleteCust:(state,cust)=>{
        console.log(cust)
        return state.customers.filter((ele)=>{
           return ele.id !==cust.cust
        })
    }
}