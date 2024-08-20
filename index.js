 
const express = require("express")
 const fs =require('fs')
 
 const app = express()
 app.use(require('./route'))

 //error handling


 

//  app.use('*',(req,res,next)=>{
//    res.status(400).send("404 not found")
//  })
app.use(express.static("./public"));


app.use((req,res,next)=>{
   const error = new Error("404 not found")
   error.status= 404;
   next(error)
})

app.use((error,req,res,next)=>{
   
   if(error.status){
       res.status(error.status).send(error.message)
   }
   
      res.status(500).send("something went wrong")
    
})


 app.listen(3000,()=>{
    console.log("app is running on port 3000")
 })