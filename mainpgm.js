var exp = require("express")
var app = exp()
var port = 1234

// 1. default router
app.get("/",(req,res)=>{
    console.log("Your Current Directory:",__dirname)
    res.send("<h1>Welcome to router</h1>")
    // res.sendFile(__dirname+"/index.html")
})

// 2. named router
app.get("/books",(req,res)=>{
    console.log("Your Current Directory:",__dirname)
    // res.send("<h1>Welcome to router</h1>")
    res.sendFile(__dirname+"/book.html")
})
//using id router
app.get("/books/:id",(req,res)=>{
    console.log("Your Current Directory:",__dirname)
    console.log(req.params)
    console.log(JSON.stringify(req.params))
    res.send("<h1>Welcome to router</h1>")
})
app.listen(port,()=>{
    console.log(`Port listening @ ${port}......`)
})