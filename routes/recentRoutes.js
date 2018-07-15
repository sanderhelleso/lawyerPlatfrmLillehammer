const mongoose = require("mongoose");
const Article = mongoose.model("articles");
const Question = mongoose.model("questions");
const Tip = mongoose.model("tips");

module.exports = app => {
    app.get("/api/sistenytt", (req, res) => {
        Article.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
            res.send(data);
        });
    });
}