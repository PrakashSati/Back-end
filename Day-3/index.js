const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
        if (req.url=="/home"){
            res.write("This is")
            res.write(" Home")
            res.end(" Page")
        }else if (req.url == "/data"){
            fs.readFile("./data.json", (err, data) =>{
                if(err){
                    res.end("Error reading file")
                }else{
                    res.end(data)
                }
            })
        }  else if(req.url=="/letter"){
            fs.readFile("./letter.txt", (err, data) =>{
                if(err){
                    res.end("Error reading file")
                }else{
                    res.end(data)
                }
            })
        }else if(req.url=="/html"){
            // what is setheader = It gives us information about response ant the request.
            res.setHeader("Content-Type", "text/html")
            res.write("<h1>This is a heading tag</h1>")
            res.end()
        }
        else{
            res.end("Page not found")
        }
});


server.listen(8080,()=>{
    console.log("Server is listening on port 8080")
});