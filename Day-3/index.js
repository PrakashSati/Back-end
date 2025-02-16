const http = require("http")

const server = http.createServer((req, res) => {
        if (req.url=="home"){
            res.end("This is a Homepage")
        }
})


server.listen(8080,()=>{
    console.log("Server is listening on port 8080")
})