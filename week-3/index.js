const http = require("node:http")
// const server=http.createServer((req,res)=>{
//     console.log(req)
// })
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("hello")
// })

let port =3000
function serverListen(){
return server.listen(port,"127.0.0.1",()=>{
    console.log(`server is running on port : ${port}`)
})
}
// const server=http.createServer((req,res)=>{
//     res.write("helllo from first api ")
//     res.end()
// })
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "content-type":"application/json"
//     })
//     res.write(JSON.stringify([{
//         "name":"khaled",
//         "age":22,
//         "college":"faculty of Engineering1" 
//     }]))
//     res.end()
// })
// create routing
const server=http.createServer((req,res)=>{
    const{url,method}=req
    if(url==="/" && method==="GET"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.write("landing page")
        res.end()
    }else if(url==="/profile" && method==="GET"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.write("profile page")
        res.end()
    }else if(url==="/about" && method==="POST"){
            res.writeHead(200,{
        "content-type":"application/json"
    })
    res.write(JSON.stringify([{
        "name":"khaled",
        "age":22,
        "college":"faculty of Engineering" 
    }]))
    res.end()
    }else{
        res.writeHead(404,{
            "content-type":"plain/text"
        })
        res.write("page Not found")
        res.end()
    }
})

serverListen()


server.on("error",(error)=>{
if(error.code==="EADDRINUSE"){
    port ++;
   serverListen()
}
})