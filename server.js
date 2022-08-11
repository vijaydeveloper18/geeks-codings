const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("Hello world");
});
server.listen(3002,'127.0.0.1',()=>{
    console.log("Server is running");
})