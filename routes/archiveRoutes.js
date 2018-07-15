const mongoose = require("mongoose");
const Article = mongoose.model("articles");
const Question = mongoose.model("questions");
const Tip = mongoose.model("tips");

module.exports = app => {
    app.get("/api/arkiv", (req, res) => {
        Article.find({}, (err, articles) => {
            res.send(articles);
        });
    });
}