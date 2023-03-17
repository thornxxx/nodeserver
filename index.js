const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable");

const server = http.createServer(function(req, res) {

  console.log(req.url)

  let path = url.parse(req.url, true)

  if(req.method.toLowerCase() == 'post'){
    let form = new formidable.IncomingForm()
    form.parse(req, function(err, fields, files){
      if(err){
        console.error(err.message)
        return
      }
      res.writeHead(200, "OK", {'Content-Type':'text/plain'})
      res.write('The POST output response')
      res.end(util.inspect({fields:files, files:files}))
    })
  }
  else if(req.method.toLowerCase()=='get'){
    res.writeHead(200, "OK", {"Content-Type": "text/plain"})
    res.write("The response\n\n")
    res.write(util.inspect(path.query)+"\n\n")
    res.end("End of Message to Browser")
  }

  else{

  }
})

server.listen(3000, function() {
  console.log("Listening on port 3000");
});