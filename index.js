/*const http = require("http"); //Modulo ya instalado con Node Js
const colors = require('colors');

const handleServer = function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("<h1>Hola mundo</h1>");
  res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, function () {
  console.log("Server on port 3000".yellow);
});
*/

const express = require("express"); //Framework de Node js
const colors = require("colors"); //Modulo instalado con "npm install colors" desde la pagina npmjs
const server = express();

server.get("/", function (req, res) {
  res.send("<h1>Hola Mundo con Express y Node Js</h1>");
  res.end();
});

server.listen(3000, function () {
  console.log("server on port 3000".red);
});
