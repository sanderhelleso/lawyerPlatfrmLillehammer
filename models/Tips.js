const mongoose = require("mongoose");
const { Schema } = mongoose;

const tipsSchema = new Schema({
    year: Number,
    month: Number,
    title: String,
    body: String
});

mongoose.model("tips", tipsSchema);