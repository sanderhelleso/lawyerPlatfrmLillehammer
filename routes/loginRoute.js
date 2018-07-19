const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("user");
const bcrypt = require("bcrypt");
const session = require("express-session");
const jwt = require('jsonwebtoken');

module.exports = app => {

    app.post("/api/login", (req, res) => {
        const email = req.body.email;
        const password = req.body.pass;
        User.findOne({
            email: email
        })
        .exec(function (err, user) {
            console.log(user);

            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    console.log("LOGGED IN");
                    if (user) {
                        req.session.userId = user._id;
                        console.log(user);
                        jwt.sign({ user: req.session.userId }, process.env.SESSION_SECRET, (err, token) => {
                            console.log(token);
                            res.send({
                                token: token
                            })
                        });
                    }
                }
            })
        });
    });

    function verifyToken(req, res, next) {
        // get auth header value
        const bearerHeader = req.headers["authorization"];
    
        if (typeof bearerHeader !== "undefined") {
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        }
    
        // NOPE.jpg
        else {
            res.send(403);
        }
    }

    app.get("/dashboard", verifyToken, (req, res) => {
        jwt.verify(req.token, process.env.SESSION_SECRET, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            }

            else {
                res.send(authData);
            }
        });

    });
}