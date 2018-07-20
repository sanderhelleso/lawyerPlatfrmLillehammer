const mongoose = require("mongoose");

module.exports = app => {
    app.post("/api/publishPost", (req, res) => {
        console.log(req.body);
    });
}