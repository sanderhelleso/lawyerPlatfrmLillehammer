const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("user");
const session = require("express-session");
const jwt = require("jsonwebtoken");

module.exports = app => {

    app.get("/dashboard/*", (req, res) => {
        const uid = req.path.split("/")[2];
        mongoose.connection.db.collection('sessions').find({}, (err, user) => {
            console.log(user);
            res.send(user);
        });
    });
}