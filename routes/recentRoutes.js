const mongoose = require("mongoose");
const Article = mongoose.model("articles");
const Question = mongoose.model("questions");
const Tip = mongoose.model("tips");

module.exports = app => {
    app.get("/api/sistenytt", (req, res) => {
        Article.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
            if (data.length  != 0) {
                res.send(data);
            }

            else {
                Question.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
                    if (data.length  != 0) {
                        res.send(data);
                    }

                    else {
                        console.log(123);
                        Tip.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
                            res.send(data);
                        });
                    }
                });
            }
        });
    });

    app.get("/api/sistenytt/all", (req, res) => {
        let json = [];
        Article.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
            json.push(data);
            Question.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
                json.push(data);
                Tip.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
                    json.push(data);
                    res.send(json);
                });
            });
        }) 
    });

    app.get("/api/sistenytt/faglig-artikkel", (req, res) => {
        Article.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
            res.send(data);
        });
    });

    app.get("/api/sistenytt/litt-av-hvert", (req, res) => {
        Question.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
            res.send(data);
        });
    });

    app.get("/api/sistenytt/aktuelt", (req, res) => {
        Tip.find().sort({ _id: -1 }).limit(1).exec((err, data) => {
            res.send(data);
        });
    });
}