const http = require("http");

const server = http.createServer((request, response) => {
const url = request.url === "/" ? "index.html" : request.url;
  
  console.log(request.headers);
  console.log(url);
  response.end(url);
});

/*
let url = "";

if(request.url === "/") {
  url = "index.html";
  }
  else {
    url = request.url;
  }
    */


server.listen(3001);