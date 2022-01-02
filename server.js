const pug = require('pug');
const fs = require('fs');
const express = require('express');

let app = express();

app.set("view engine", "pug");
app.set("views", "public/views");

app.use(express.json());
app.use(express.static("public"));
app.get("/", sendIndex);

function sendIndex(req, res, next){
	res.render("home");
}

//For local copy
app.listen(3000);
console.log("Server listening at http://localhost:3000");