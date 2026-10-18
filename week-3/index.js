const http = require("node:http")
const fs =require("node:fs")
const path = require("node:path")
// const server=http.createServer((req,res)=>{
//     console.log(req)
// })
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("hello")
// })

let port =3000
const filePath=path.resolve("index.html")
const userPath=path.resolve("users.json")


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
    }else if(url==="/signUp" && method === "POST"){
        let data=""
        req.on("data",(chunk)=>{
            
            console.log("=====================")
            console.log("chunk",chunk)
            data+=chunk
            console.log("=====================")
        }).on("end",()=>{
            console.log("data before parse",data)
            data=JSON.parse(data)
            // console.log("full data",data)
            const users=JSON.parse(fs.readFileSync(path.resolve("users1.json"),{encoding:"utf-8"}))
            console.log(users)
            const {email,password,name}=data;
            const isUSerExist=users.find(user=>user.email === email)
            console.log("isUSerExist",isUSerExist)
            if(isUSerExist){
                res.writeHead(409,{
                    "content-type":"application/json"
                })
                res.write(JSON.stringify({
                    message:"user Already exist"
                }))
                res.end()
            }else{
                users.push({email,password,name,id:Date.now()})
                fs.writeFileSync(path.resolve("users1.json"),JSON.stringify(users))
                res.writeHead(201,{"content-type":"application/json"})
                res.write(JSON.stringify({
                    message:"user created Successfully"
                }))
                res.end()
            }
            
        })
        
    }else if(url==="/allusers" && method==="GET"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(JSON.stringify(users))
        res.end()
    }else if(url==="/blog" && method==="GET"){
        const readStream=fs.createReadStream(filePath,{
            encoding:"utf-8",
            highWaterMark:5
        })
        res.writeHead(200,{"content-type":"text/html"})
        readStream.on("data",(chunk)=>{
            res.write(chunk)
        }).on("end",()=>{
            res.end()
        })
    }else if(url==="/users" && method==="GET"){
        const readStream=fs.createReadStream(userPath,{
            encoding:"utf-8",
            highWaterMark:5
        })
        res.writeHead(200,{"content-type":"application/json"})
        readStream.on("data",(chunk)=>{
            res.write(chunk)
        }).on("end",()=>{
            res.end()
        })
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
