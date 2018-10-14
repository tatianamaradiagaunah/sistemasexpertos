var express = require("express");
var app = express();
const PORT = process.env.PORT ||3000;
 
app.use(express.static("public"));   //publica el directorio
app.listen(PORT);   //levantar el servidor