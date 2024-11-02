// const http = require("http")

// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET") {
//        res.end("home route");
//     } else {
//         res.end("404 not found")
//   }
   
// })

// myServer.listen(3000,()=> {
//     console.log("Server is running")
// })


// const http = require("http")
// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET") {
        
//         res.end("Home route")
//     }
//     else {
//         res.end("404 Not found")
//     }
// })

// myServer.listen(3000, () => {
//     console.log("Server is running")
// })


// const http = require("http")

// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET") {
        
//         res.end("home route")
//     }
//     else if (req.url == "/user" && req.method == "POST") {
//         req.on("data", (chunk) => {
//           console.log(JSON.parse(chunk).name)
//       })
//         res.end("user route")
//    }
    
//     else {
//         res.end("404 not found")
//     }
// })


// myServer.listen(3000, () => {
//     console.log("Server is running")
// })

// const http = require("http")

// const myServer = http.createServer((req, res) => {
//     if (req.url == "/" && req.method == "GET") {
        
//         res.end("home route")
//     }
//     else if (req.url == "/user" && req.method == "POST") {

//         req.on("data", (chunk) => {
//             console.log(JSON.parse(chunk).name)
//         })
//         res.end("user route")
//     }
//     else {
//         res.end("404 not found")
//     }
    
// })
// myServer.listen(3000, () => {
//     console.log("Server is running")
// })

// const http = require("http")
// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET") {
        
//         res.end("home route")
//     } else if (req.url == "/user" && req.method == "POST") {
//         req.on("data",(chunk)=> {
//             let { name, email } = JSON.parse(chunk)
//             res.end(name)
            
//         })
      
//     }
    
//     else {
//         res.end("404 not found")
//     }
// })
// myServer.listen(3000, () => {
//      console.log("Server is running")
//  })

// const http = require("http")
// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET")
//     {

//         res.end("home route")
//     } else if (req.url == "/user" && req.method == "POST") {
//         req.on("data",(chunk)=> {
//             let { name, email } = JSON.parse(chunk)
//             res.end(email)
//         })
      
//     }
//     else {
//         res.end("404 not found")
//     }
// })

// myServer.listen(3000, () => {
//     console.log("Server is running")
// })
// const http = require("http")
// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET") {
        
//         res.end("home route")
//     }
//     else if (req.url == "/user" && req.method == "POST") {
//         req.on("data", (chunk) => {
//             let { name, email } = JSON.parse(chunk)
            
//             res.end(email)
//         })
//     }
//     else {
//         res.end("404 not found")
//     }
// })

// myServer.listen(3000, () => {
//     console.log("Server is running")
// })


// const http = require("http")
// const myServer = http.createServer((req, res) => {
//     if (req.url == "/" && req.method == "GET") {
        
//         res.end("home route")
//     } else if (req.url == "/user" && req.method == "POST") {
//         req.on("data", (chunk) => {
//             let { name, email } = JSON.parse(chunk)
//             res.end(name)
//       })

   
//     }
//     else {
//         res.end("404 not found")
//   }
// })

// myServer.listen(8000, () => {
//     console.log("Server is running")
// })


// const express = require("express")
// const app = express()

// const port = 8000;

// app.listen(port, () => {
//     console.log(`Server is running ${port}`)
// })
// const express = require("express")
// const app = express()
// const port = 8000;
// app.listen(port,()=> {
//      console.log(`Server is running ${port}`)
//  })

// const express = require("express")
// const app = express()
// const port = 8000;
// app.listen(port, () => {
//     console.log(`Server is running ${port}`)
// })



// const express = require("express")
// const app = express()
// const port = 8000;

// app.get("/user", (req,res) => {
//     res.end("user route")
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })

// const express = require("express")
// const app = express()
// const port = 8000;

// app.get("/user", (req, res) => {
//     res.end ("user route")
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })

// const express = require("express")
// const app = express()
// const port = 8000;

// app.get("/user", (req, res) => {
//     res.end("user route")
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })

// const express = require("express")
// const app = express()
// const port = 8000;
// app.get("/user", (req, res) => {
//     res.end ("user route")
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })

// const express = require("express")
// const app = express()
// const port = 8000;
// app.get("/user", (req, res) => {
//     res.end("user route")
// })

// app.post("/user", (req, res) => {
//     res.end(req.body)
// })

// app.listen(port, () => {
//     console.log(`Server is running`)
// })


// const express = require("express")
// const app = express()
// const port = 8000
// app.use(express.json())
// app.get("/user", (req, res) => {
//     res.end("user route")
// })
// app.post("/user", (req, res) => {
//     res.send(req.body)
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })

// const express = require("express")
// const app = express()
// const port = 8000;
// app.use(express.json())
// app.get("/user", (req, res) => {
//     res.end("user route")
// })
// app.post("/user", (req, res) => {
//     res.send(req.body)
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })

// const express = require("express")
// const app = express()
// const port = 8000
// app.use(express.json())
// app.get("/user", (req, res) => {
//     res.end("user route")
// })
// app.post("/user", (req, res) => {
//     res.send(req.body)
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })

// const http = require("http")
// const myServer = http.createServer((req, res) => {
//     if (req.url == "/" && req.method == "GET") {
        
//         res.end("home route")
//     } else if (req.url == "/user" && req.method == "POST") {
//         req.on("data", (chunk) => {
//             let { name, email } = JSON.parse(chunk)
//             res.end(name)
//        })
      
      
//     }
//     else {
//         res.end("404 not found")
//     }
// })

// myServer.listen(8000, () => {
//     console.log("server is running")
// })

// const http = require("http")
// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET") {
//         res.end("home route")
        
//     }
//     else if (req.url == "/user" && req.method == "POST") {
//         req.on("data", (chunk) => {
//             let { name, email } = JSON.parse(chunk)
//             res.end(email)
//         })
 
//     }
//     else {
//         res.end("404 not found")
//     }
// })
// myServer.listen(8000, () => {
//     console.log("Server is running")
// })

// const express = require("express")
// const app = express()
// const port = 8000

// app.get("/user", (req, res) => {
//     res.end("user route")
// })
// app.use(express.json())
// app.post("/user", (req, res) => {
//     res.send(req.body)
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })
// const express = require("express")
// const app = express()
// const port = 8000

// app.use(express.json())
// app.get("/user", (req, res) => {
//       let data = [
//         {
//           name: "aaaaaa",
//           email: "aaaaaa@gmail.com",
//         },
//         {
//           name: "jjjj",
//           email: "aaaaaa@gmail.com",
//         },
//         {
//           name: "rrrrr",
//           email: "aaaaaa@gmail.com",
//         },
//         {
//           name: "ddddd",
//           email: "aaaaaa@gmail.com",
//         },
//         {
//           name: "ccccc",
//           email: "aaaaaa@gmail.com",
//         },
//         {
//           name: "bbbbb",
//           email: "aaaaaa@gmail.com",
//         },
//       ];
//     res.send(data)
// })
// app.post("/user", (req, res) => {
  


//     res.send(req.body)
// })
// app.listen(port, () => {
//     console.log(`Server is running`)
// })

// const http = require("http")
// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET") {
    
//         res.end("home route")
//     }
//     else if (req.url == "/user" && req.method == "POST") {
//         req.on("data", (chunk) => {
//             let { name, email } = JSON.parse(chunk)
//             res.end(email)
//      })
     
//     }
//     else {
//         res.end("404 not found")
//     }

// })
// myServer.listen(8000, () => {
//     console.log("Server is running")
// })

// const express = require("express")
// const app = express()
// const port = 8000
// app.use(express.json())
// app.get("/user", (req, res) => {
//     let data = [
//         {
//             name: "hasan",
//             email:"hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email:"hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email:"hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email:"hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email:"hasan@gmail.com"
//         },
//     ]
//     res.status(201).send(data)
// })
// app.post("/user", (req, res) => {
//     res.send(req.body)
// })
// app.listen(port, () => {
//     console.log("Server is running")
// })

// const express = require("express");
// const app = express();
// const port = 8000;
// app.use(express.json())
// app.use(express.static("public"))
// app.get("/user", (req, res) => {
//     let data = [
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//     ]
//     res.status(200).send(data)
// })
// app.post("/user", (req,res) => {
//     res.end("user post route")
// })
// app.listen(port, () => {
//   console.log("Server is running");
// });

// const http = require("http")
// const myServer = http.createServer((req,res) => {
//     if (req.url == "/" && req.method == "GET") {
//         res.end("home route")
        
//     }
//     else if (req.url == "/user" && req.method == "POST") {
//         req.on("data", (chunk) => {
//             let { name, email } = JSON.parse(chunk)
//             res.end(email)
//         })
        
//     }
//     else {
//         res.end("404 not found")
//     }
// })
// myServer.listen(8000, () => {
//     console.log("Server is running")
// })


// const express = require("express")
// const app = express()
// const port = 8000
// app.use(express.json())
// app.use(express.static("public"))

// app.get("/user", (req, res) => {
//     let data = [
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//         {
//             name: "hasan",
//             email: "hasan@gmail.com"
//         },
//     ]
//     res.status(200).send(data)
// })
// app.post("/user", (req,res) => {
//     res.end("user post route")
// })

// app.listen(port, () => {
//     console.log(`Server is running`)
// })

const http = require("http")
const myServer = http.createServer((req,res) => {
    console.log(req.method)
  res.end()  
})
myServer.listen(8000, () => {
    console.log("server is running")
})