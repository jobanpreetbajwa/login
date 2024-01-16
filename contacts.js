const express=require("express")
const route=express.Router()

let list=[
    {
    id:0,
    name:'joban',
    contactInfo:"123456789"
    },
    {
    id:1,
    name:'chirag',
    contactInfo:"4146416818"
    },
    {
    id:2,
    name:'guri',
    contactInfo:"123456789"
    },
    {
    id:3,
    name:'hitesh',
    contactInfo:"244829114"
    },
]
route.get('/',(req,res)=>{
    
    res.send(list)
})
route.post('/',async(req,res)=>{
    let data=await req.body
    console.log(data,"request object")
    // res.send(req.body)
})
module.exports= route