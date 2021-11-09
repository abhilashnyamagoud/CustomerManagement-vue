export const state=()=>({
    customers:[{ 
                id:1,   
                name: "Jonas Chambers",
                phone: "8792655457",
                email: "Jonas@gmail.com",
                country: "India",
                orders:[{
                    id:1111,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:2,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },
                {
                    id:3,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },
                {
                    id:4,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                }
            ]
            },
            {
                id:2,
                name: "Lael Bolton",
                phone: "8792655457",
                email: "Lael@gmail.com",
                country: "India",
                orders:[{
                    id:5,
                    product:'pencil',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },{
                    id:6,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:7,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },]
            },
            {
                id:3,
                name: "Reese Romero",
                phone: "8792655457",
                email: "Reese@gmail.com",
                country: "India",
                orders:[{
                    id:8,
                    product:'pencil',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },{
                    id:9,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:10,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },]
            },
            {
                id:4,
                name: "Shea Flores",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India",
                orders:[{
                    id:11,
                    product:'book',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },{
                    id:12,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:13,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },]
            },
            {
                id:5,
                name: "Jonah Daniel",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India",
                orders:[{
                    id:14,
                    product:"laptop",
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                }]
            },
            {
                id:6,
                name: "Jona Chambers",
                phone: "8792655457",
                email: "Jonas@gmail.com",
                country: "India",
                orders:[{
                    id:15,
                    product:'pencil',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },{
                    id:16,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:17,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },]
            },
            {
                id:7,
                name: "Lael Bolto",
                phone: "8792655457",
                email: "Lael@gmail.com",
                country: "India",
                orders:[{
                    id:18,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },{
                    id:19,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:20,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },]
            },
            {
                id:8,
                name: "Rees Romer",
                phone: "8792655457",
                email: "Reese@gmail.com",
                country: "India",
                orders:[{
                    id:21,
                    product:'pencil',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },{
                    id:22,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:23,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },]
            },
            {
                id:9,
                name: "Shea Flore",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India",
                orders:[{
                    id:24,
                    product:'book',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },{
                    id:25,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:26,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },]
            },
            {
                id:10,
                name: "Jonah Danie",
                phone: "8792655457",
                email: "Shea@gmail.com",
                country: "India",
                orders:[{
                    id:27,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },{
                    id:28,
                    product:'pen',
                    date:'09/5/2021',
                    quantity:5,
                    price:50
                },
                {
                    id:29,
                    product:'laptop',
                    date:'09/5/2020',
                    quantity:5,
                    price:50
                },]
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
    },
    removeUser:(state)=>{
        return state.userdata=[]
    }
}