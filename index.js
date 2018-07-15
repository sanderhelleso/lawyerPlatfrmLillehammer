// ES6
'use strict'

// vals
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const dotenv = require("dotenv").load();
const mongoose = require("mongoose");

require("./models/Article");
require("./models/Questions");
require("./models/Tips");

// db
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

// schemas
const Article = mongoose.model("articles");
const Question = mongoose.model("questions");
const Tip = mongoose.model("tips");

/*const article = new Article({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    title: "Månedens sak i høyesteretten",
    body: "Xorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus sapien, consequat sed dolor quis, rutrum facilisis leo. Sed quis rhoncus lorem. Aliquam erat volutpat. Sed aliquet, elit eget maximus euismod, justo libero aliquam metus, eu elementum ipsum massa sed quam. Integer molestie, dolor ut pellentesque pretium, velit augue suscipit nunc, a suscipit elit lorem pellentesque est. Suspendisse nec placerat mauris, ullamcorper semper lectus. Aenean ac rutrum lectus, ut consectetur libero. Nulla lacinia quam quis purus convallis tempus. Nunc porttitor sit amet velit id porttitor. Sed ac orci vel neque vestibulum sodales sed et felis."
});
article.save(() => {
    console.log("SAVED ARTICLE")
});

const question = new Question({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    title: "5 kjappe med El Nino",
    body: "Xorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus sapien, consequat sed dolor quis, rutrum facilisis leo. Sed quis rhoncus lorem. Aliquam erat volutpat. Sed aliquet, elit eget maximus euismod, justo libero aliquam metus, eu elementum ipsum massa sed quam. Integer molestie, dolor ut pellentesque pretium, velit augue suscipit nunc, a suscipit elit lorem pellentesque est. Suspendisse nec placerat mauris, ullamcorper semper lectus. Aenean ac rutrum lectus, ut consectetur libero. Nulla lacinia quam quis purus convallis tempus. Nunc porttitor sit amet velit id porttitor. Sed ac orci vel neque vestibulum sodales sed et felis."
});
question.save(() => {
    console.log("SAVED QUESTION");
});

const tip = new Tip({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    title: "Månedens studentips",
    body: "Xorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus sapien, consequat sed dolor quis, rutrum facilisis leo. Sed quis rhoncus lorem. Aliquam erat volutpat. Sed aliquet, elit eget maximus euismod, justo libero aliquam metus, eu elementum ipsum massa sed quam. Integer molestie, dolor ut pellentesque pretium, velit augue suscipit nunc, a suscipit elit lorem pellentesque est. Suspendisse nec placerat mauris, ullamcorper semper lectus. Aenean ac rutrum lectus, ut consectetur libero. Nulla lacinia quam quis purus convallis tempus. Nunc porttitor sit amet velit id porttitor. Sed ac orci vel neque vestibulum sodales sed et felis."
});
tip.save(() => {
    console.log("SAVED TIP");
});*/


/*Question.findOne({ "title": "test" }, (err, article) => {
    console.log(question.title);
});*/

// app
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/recentRoutes")(app);
require("./routes/archiveRoutes")(app);

// start server
server.listen(port, host);
console.log(`Magic is happening on ${port}`);