const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("user");
const bcrypt = require("bcrypt");
const session = require("express-session");

module.exports = app => {

    app.get("/login", (req,res) =>  {
        console.log(123);
        User.findOne({
            email: process.env.ADMIN_USER
        })
        .exec(function (err, user) {
            console.log(user);
            mongoose.connection.db.collection('sessions').findOne({
                'sessionID': user._id
            }, () => {
                res.redirect("/")
            });
        });
    });

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
                        res.send(req.session);
                    }
                }
            })
        });
    });

    app.get("/dashboard", (req, res) => {
        console.log(req.session);
    });
}