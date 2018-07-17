const mongoose = require("mongoose");
const Article = mongoose.model("articles");
const Question = mongoose.model("questions");
const Tip = mongoose.model("tips");
const MONTHS = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "oktober", "september", "november", "desember"];

module.exports = app => {
    app.get("/api/arkiv", (req, res) => {
        Article.find({}, (err, articles) => {
            res.send(articles);
        });
    });

    // direct to category
    app.get("/api/arkiv/*/*/*", (req, res) => {
        const url = req.path.split("/");
        const year = url[3];
        const month = MONTHS.indexOf(url[4]);
        const category = url[5];

        if (category != "all") {
            switch (category) {
                case "manedenssak":
                    Article.find({ "year": year, "month": month }, (err, article) => {
                        res.send(article);
                    });
                break;
                
                case "femkjappe":
                    Question.find({ "year": year, "month": month }, (err, question) => {
                        res.send(question);
                    });
                break;
                
                case "studenttips":
                    Tip.find({ "year": year, "month": month }, (err, tip) => {
                        res.send(tip);
                    });
                break;
            }
        }

        // see all categories
        else {
            let json = [];
            console.log(year, month);
            Article.find({ "year": year, "month": month }, (err, article) => {
                json.push(article);
                Question.find({ "year": year, "month": month }, (err, question) => {
                    json.push(question);
                    Tip.find({ "year": year, "month": month }, (err, tip) => {
                        json.push(tip);
                        res.send(json);
                    });
                });
            })
        }
    });
}