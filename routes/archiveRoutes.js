const mongoose = require("mongoose");
const Article = mongoose.model("articles");
const Question = mongoose.model("questions");
const Tip = mongoose.model("tips");
const MONTHS = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "oktober", "september", "november", "desember"];

module.exports = app => {
    app.get("/api/arkiv", (req, res) => {
        let json = [];
        Article.find({}, (err, articles) => {
            json.push(articles)
            Question.find({}, (err, questions) => {
                json.push(questions)
                Tip.find({}, (err, tips) => {
                    json.push(tips)
                    res.send(json);
                });
            });
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
                case "faglig-artikkel":
                    Article.find({ "year": year, "month": month }, (err, article) => {
                        res.send(article);
                    });
                break;
                
                case "litt-av-hvert":
                    Question.find({ "year": year, "month": month }, (err, question) => {
                        res.send(question);
                    });
                break;
                
                case "aktuelt":
                    Tip.find({ "year": year, "month": month }, (err, tip) => {
                        res.send(tip);
                    });
                break;
            }
        }

        // see all categories
        else {
            let json = [];
            Article.find({ "year": year, "month": month }, (err, article) => {
                console.log(article);
                json.push(article);
                Question.find({ "year": year, "month": month }, (err, question) => {
                    json.push(question);
                    Tip.find({ "year": year, "month": month }, (err, tip) => {
                        json.push(tip);
                        res.send(json);
                    });
                });
            });
        }
    });
}