const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
    year: Number,
    month: Number,
    title: String,
    body: String
});

mongoose.model("questions", questionSchema);