let server = require("http")
let fs = require("fs");

let http = server.createServer((req,res)=>{
    if(req.url == "/" && req.method){
        res.writeHead(200, "{ 'Content-Type': 'text/html}");
        res.end("<h1>My Web Page</h1>");
    }

    else if(req.url == "/home" && req.method){
        res.writeHead(200, "{ 'Content-Type': 'text/html}");
        const html = fs.readFileSync("./public/home.html","utf-8")
        res.end(html);
    }
    else if(req.url == "/about" && req.method){
        res.writeHead(200, "{ 'Content-Type': 'text/html}");
        const html = fs.readFileSync("./public/about.html","utf-8")
        res.end(html);
    }
    else if(req.url == "/content" && req.method){
        res.writeHead(200, "{ 'Content-Type': 'text/html}");
        const html = fs.readFileSync("./public/content.html","utf-8")
        res.end(html);
    }
    else{
        res.writeHead(200, "{ 'Content-Type': 'text/html}");
        const html = fs.readFileSync("./public/404.html","utf-8")
        res.end(html);
        
    }
})

http.listen(8080,()=>{
    console.log("ready to use");
})



// let http = require ('http')
// let PORT = 8080
// let server = http.createServer((req,res) => {
//     console.log(req.url);
//     if(req.url == '/')
//     {
//         res.writeHead(200,{ 'Content-Type': "text/html"})
//     }
//     if(req.url == "/about")
//     {

//     }
//     else{

//     }
// })

// server.listen(PORT,() => {
//     console.log("chala");
// })






// let http = require ('http')
// let PORT = 8080
// let server = http.createServer((req,res) => {
//     console.log(req.url);
//     if(req.url == '/')
//     {
//         res.writeHead(200,{ 'Content-Type': "text/html"})
//     }
//     if(req.url == "/about")
//     {

//     }
//     else{

//     }
// })

// server.listen(PORT,() => {
//     console.log("chala");
// })
