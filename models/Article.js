const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
    month: Number,
    title: String,
    body: String
});

mongoose.model("articles", articleSchema);
