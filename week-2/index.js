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