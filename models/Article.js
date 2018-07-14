const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: String
});

mongoose.model("articles", articleSchema);