const routes = require('express').Router()
const fs = require('fs')
const {aboutController,mainController,homeController}= require('./controller')

routes.get("/about",aboutController)

routes.get("/main",mainController)

routes.get('/home',homeController)

//custom middleware 

function myMiddleware(req,res,next){
    console.log(`${req.method},-${req.url}`)
    console.log("i am middleware")
    next()
}



module.exports= routes