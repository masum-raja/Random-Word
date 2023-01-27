const express=require("express")
const randomWords = require('random-words');

const app=express()

app.get("/randomword",(req,res)=>{
    res.send(str=randomWords())

})


app.listen(8080,()=>{
    console.log("listen on port 8080")
})