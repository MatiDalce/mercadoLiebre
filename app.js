const express = require("express");

const path = require("path");
const app = express(); 

const publicPath = path.resolve(__dirname ,"./public");

const htmlPath = path.resolve(__dirname, "./views/home.html");

const registerPath = path.resolve(__dirname, "./views/register.html") ;

const loginPath = path.resolve(__dirname, "./views/login.html") ;

app.use(express.static(registerPath));

app.use(express.static(htmlPath));

app.use( express.static(publicPath));

app.listen(process.env.PORT ||3000, () => {console.log("de forma correcta") }) ;

app.get ( "/" , (req, res) =>  { res.sendFile(htmlPath);  
} ) 

app.get("/register" , (req, res) => {res.sendFile(registerPath)} ) 

app.get("/login", (req, res) => { res.sendFile(loginPath)})