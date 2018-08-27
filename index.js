// ES6
'use strict'

// vals
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const dotenv = require("dotenv").load();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);

require("./models/Article");
require("./models/Questions");
require("./models/Tips");
require("./models/User");

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

// db
mongoose.Promise = global.Promise;
const connectWithRetry = () => {
    return mongoose.connect(encodeURI(process.env.MONGO_URI, err => {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec');
            throw err;
            setTimeout(connectWithRetry, 5000);
        }

        else {
            console.log("connected to DB!");
        }
    }));
};
connectWithRetry();

// app
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

//use sessions for tracking logins
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/recentRoutes")(app);
require("./routes/archiveRoutes")(app);
require("./routes/loginRoute")(app);
require("./routes/dashboardRoute")(app);
require("./routes/publishPost")(app);

// serve ut production assets
// serve out static files
app.use(express.static("client/build"));

// if it dosent recognize the route
const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// start server
server.listen(port, host);
console.log(`Magic is happening on ${port}`);