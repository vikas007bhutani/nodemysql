var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res)
{
        res.writeHead(200,{'Content-Type':'text/html'}  );
       var myread= fs.ReadStream(__dirname+"/try.html","utf8")
       myread.pipe(res);
})

server.listen(4202,'127.0.0.1');
console.log("node is listing to localhost at port 3000");