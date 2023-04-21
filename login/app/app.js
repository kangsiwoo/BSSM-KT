"use strict";

const express = require("express");
const home = require("./src/routes/home/index")
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs")

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);

module.exports = app;