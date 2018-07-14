// ES6
'use strict'

// vals
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const dotenv = require("dotenv").load();
const mongoose = require("mongoose");

require("./models/Article");

// db
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

// app
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// start server
server.listen(port, host);
console.log(`Magic is happening on ${port}`);