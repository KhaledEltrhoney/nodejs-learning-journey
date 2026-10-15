// const {EventEmitter}=require("node:events")
// const emmiter=new EventEmitter();

// console.log(emmiter.eventNames())
// emmiter.on("hello",()=>{
//     console.log("hello from event")
// })

// const handleListener=()=>{
//     console.log("hiii from once")
// }
// emmiter.on("sayHi",handleListener)

// emmiter.on("sayHi",()=>{
//     console.log("hiii from one")
// })
// console.log(emmiter.eventNames())
// emmiter.prependOnceListener("sayHi",()=>{
//       console.log("hiii from prependOnceListener")
// })
// console.log(emmiter.eventNames())
// emmiter.emit("sayHi")
// emmiter.removeListener("sayHi",handleListener)
// console.log(emmiter.eventNames())

const path=require("node:path")
// basename
// console.log(path.basename("F:/Route/backend/sessions/week-2/index.js"))
// console.log(path.basename("F:/Route/backend/sessions/week-2/index.js",".js"))
//dirname
// console.log(path.dirname("F:/Route/backend/sessions/week-2/index.js"))
//extension name
// console.log(path.extname("F:/Route/backend/sessions/week-2/index.js"))
// join 
// console.log(path.join("Route","backend","sessions","week-2","index.js"))
// resolve
// console.log(path.resolve("index.js"))
// normalize
// console.log(path.normalize("F:/Route/../backend/sessions///week-2/index.js"))
// is absolute
// console.log(path.isAbsolute("F:/Route/backend/sessions/week-2/index.js"))
// relative
// console.log(path.relative("F:/Route/backend/sessions/week-2/index.js","F:/Route/backend/sessions/week-3"))
// parse
// const pathObj=path.parse("F:/Route/backend/sessions/week-2/index.js")
// console.log(path.parse("F:/Route/backend/sessions/week-2/index.js"))
// format 
// console.log(path.format(pathObj))
// // os module 
// const os=require("node:os")
// // console.log(os.platform())
// // console.log(os.arch())
// // console.log(os.cpus().length)
// // console.log(os.totalmem()/1024 ** 3)
// // console.log(os.freemem()/1024 ** 3)
// // console.log(os.hostname());
// // console.log(os.homedir());
// // console.log(os.uptime() / 3600, "hours");
const fs=require("node:fs")
const { pipeline ,Transform} = require("node:stream")

// fs.readFile("data.json","utf-8",(error,data)=>{
//     if(error) console.log("error occured ",error)
//     console.log(JSON.parse(data))
// // console.log(data)
// })
// console.log("read file without async")

// const data=fs.readFileSync("data.json","utf-8")
// console.log(data)

// console.log("read file wit sync")
// [
//     {
//         "name":"ahmed",
//         "age":20,
//         "city":"cairo"
//     },
//     {
//         "name":"ahmed",
//         "age":20,
//         "city":"cairo"
//     },
//     {
//         "name":"ahmed",
//         "age":20,
//         "city":"cairo"
//     }
// ]

// const writeData={
//     name:"khaled",
//     age:22,
//     city:"cairo"
// }
// const data=JSON.parse(fs.readFileSync("data.json","utf-8"))
// data.push(writeData)
// fs.writeFileSync("data.json",JSON.stringify(data))


// fs.writeFileSync("data.json",JSON.stringify(writeData))

// fs.writeFileSync("test.txt","hello")
// fs.appendFileSync("test.txt","\n hiiiiiiiiiiiiiiiiiiiiiiii")
// fs.appendFileSync("test.txt","\n hiiiiiiiiiiiiiiiiiiiiiiii khaled")
// fs.appendFileSync("test.txt","\n final line")
// delete file
// fs.unlinkSync("test.txt")
// rename file
// fs.renameSync("data.json","users.json")
// fs.mkdirSync("test/user")

// fs.mkdirSync("config/test",{
//     recursive:true
// })

// fs.rmdirSync("config")
// fs.rmdirSync()
// const readStream=fs.createReadStream("data.txt",{
//     encoding:"utf-8",
//     highWaterMark:200,
//     // autoClose:false
//     start:400,
//     end:500
// })
// readStream.on("data",(chunk)=>{
//     console.log(`chunk : ${chunk}`)
// })
// readStream.on("end",()=>{
//     console.log("stramended")
// })
// readStream.pause()
// setTimeout(()=>{
// readStream.resume()
// },5000)
// readStream.on("close",()=>{
//     console.log("stream closed")
// })
// 
const zlib = require("node:zlib");
const compressed=zlib.createGzip

const readStream=fs.createReadStream("data.txt","utf-8")
const writeStream=fs.createWriteStream("compress.gz","utf-8")
const transform= new Transform({
    transform:(chunk,encoding,callback)=>{
        callback(null,chunk.toString().toUpperCase())
    }
})
// readStream.pipe(writeStream)
pipeline(readStream,transform,compressed,writeStream,(err)=>{
    if (err) {
      console.log('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
})