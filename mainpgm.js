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
    console.log(req.params)
    console.log(JSON.stringify(req.params))
    console.log(JSON.parse(JSON.stringify(req.params)))
    res.send("<h1>Welcome to router</h1>")
})

// id and pageno router
app.get("/books/:id/pageno/:pno",(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

// from to (range) router
app.get("/book/:from-:to",(req,res)=>{
    res.send(req.params)
})

//using extension
app.get("/myfile.jsp",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

//regular expression router optional
app.get("/ma{n}oj",(req,res)=>{
    res.send("regular expression router n optional")
})

//regular expression router group
app.get("/ma{noj}kumar",(req,res)=>{
    res.send("regular expression router noj optional")
})


app.listen(port,()=>{
    console.log(`Port listening @ ${port}......`)
})