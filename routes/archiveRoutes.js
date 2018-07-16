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

    app.get("/api/arkiv/*/*/*", (req, res) => {
        const url = req.path.split("/");
        const year = url[3];
        const month = MONTHS.indexOf(url[4]);
        const category = url[5];

        switch (category) {
            case "manedenssak":
                Article.find({ "year": year, "month": month }, (err, article) => {
                    res.send(article);
                });
            break;
            
            case "femkjappe":
                Question.find({ "year": year, "month": month }, (err, article) => {
                    res.send(article);
                });
            break;
            
            case "studenttips":
                Tip.find({ "year": year, "month": month }, (err, article) => {
                    res.send(article);
                });
            break;
        }
    });

    app.get("/api/all/arkiv/*/*/*/", (req, res) => {
        const url = req.path.split("/");
        const year = url[3];
        const month = MONTHS.indexOf(url[4]);
        const category = url[5];
        let json = [];
        console.log(123);

        Article.find({ "year": year, "month": month }, (err, article) => {
            json.push(data);
            Question.find({ "year": year, "month": month }, (err, article) => {
                json.push(data);
                Tip.find({ "year": year, "month": month }, (err, article) => {
                    json.push(data);
                    res.send(json);
                });
            });
        })
    });
}