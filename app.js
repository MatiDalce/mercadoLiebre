const express = require("express");

const path = require("path");
const app = express(); 

const publicPath = path.resolve(__dirname ,"./public");

const htmlPath = path.resolve(__dirname, "./views/home.html");

app.use(express.static(htmlPath));

app.use( express.static(publicPath));

app.listen(3000, () => {console.log("de forma correcta") }) ;

app.get ( "/" , (req, res) =>  { res.sendFile(htmlPath);  
} ) 