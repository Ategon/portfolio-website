const pug = require('pug');
const fs = require('fs');
const express = require('express');

let app = express();

app.set("view engine", "pug");
app.set("views", "public/views");

app.use(express.json());
app.use(express.static("public"));
app.get("/", sendIndex);

app.get("/about", sendAbout);
app.get("/contact", sendContact);
app.get("/skills", sendSkills);
app.get("/projects", sendProjects);

function sendIndex(req, res, next){
	res.render("home");
}

function sendAbout(req, res, next){
	res.render("about");
}

function sendContact(req, res, next){
	res.render("contact");
}

function sendSkills(req, res, next){
	res.render("skills");
}

function sendProjects(req, res, next){
	res.render("projects");
}

//For local copy
app.listen(3000);
console.log("Server listening at http://localhost:3000");