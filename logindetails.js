const express=require("express")
const route=express.Router()

route.get("/",(req,res)=>{
    console.log(req.body)
    res.send("hello world")
})
route.post("/",(req,res)=>{
    console.log(req.body)
    res.send("data received").status(200)
})


module.exports= route