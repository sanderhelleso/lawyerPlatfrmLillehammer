const mongoose = require("mongoose");
const Article = mongoose.model("articles");
const Question = mongoose.model("questions");
const Tip = mongoose.model("tips");

module.exports = app => {
    app.post("/api/publishPost", (req, res) => {
        switch (req.body.category) {
            case "1":
                const article = new Article({
                    year: req.body.year,
                    month: req.body.month,
                    title: req.body.title,
                    intro: req.body.intro,
                    body: req.body.postBody
                });
                article.save(() => {
                    console.log("SAVED Article");
                });
            break;

            case "2":
                const question = new Question({
                    year: req.body.year,
                    month: req.body.month,
                    title: req.body.title,
                    intro: req.body.intro,
                    body: req.body.postBody
                });
                question.save(() => {
                    console.log("SAVED Question");
                });
            break;

            case "3":
                const tip = new Tip({
                    year: req.body.year,
                    month: req.body.month,
                    title: req.body.title,
                    intro: req.body.intro,
                    body: req.body.postBody
                });
                tip.save(() => {
                    console.log("SAVED Tip");
                });
            break;
        }
        console.log(req.body);
    });
}