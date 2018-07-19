const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("user");
const bcrypt = require("bcrypt");

module.exports = app => {
    app.post("/api/login", (req, res) => {
        const email = req.body.email;
        const password = req.body.pass;
        User.findOne({ email: email })
            .exec(function (err, user) {
                console.log(user);
                if (err) {
                    return err;
                }

                else if (!user) {
                    const err = new Error('User not found.');
                    err.status = 401;
                    return err;
                }

                bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    console.log("LOGGED IN");
                    return null, user;
                } 
            })
        });
    });
}