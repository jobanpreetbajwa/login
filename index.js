const express=require("express")
const cors=require("cors")
const bodyParser = require('body-parser');
const list=require("./contacts")
const login=require("./logindetails")

const app=express()

app.use(cors())
app.use(bodyParser.json());
app.use('/contacts',list)
app.use("/login",login)
console.log("hey server")



app.get("/",(req,res)=>{
    console.log(req.body,"value")
    res.send({re:"reached"}).status(200)
})
app.post("/",(req,res)=>{
    console.log(req.body,"value")
    res.send({re:"reached"}).status(200)
})




const port=process.env.PORT||5000
app.listen(5000,()=>{
    console.log("server started")
})