const fs = require('fs')

exports.aboutController =(req,res)=>{
    fs.readFile('./pages/about.html',(err,data)=>{
        if(err){
            res.write("something went wrong")
        }
        else{
            res.write(data)
            res.end()
        }
    })
     
    
 
};

exports.mainController =(req,res)=>{
    fs.readFile('./pages/main.html',(err,data)=>{
        if(err){
            res.write("something went wrong")
        }
        else{
            res.write(data)
             
            res.end()
        }
    })
     
    
 
}

exports.homeController = (req,res)=>{
    fs.readFile('./pages/home.html',(err,data)=>{
        if(err){
            res.write("someThin went wrong")
        }
        else{
            res.write(data)
            res.end()
        }
    })

}