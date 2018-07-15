const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const tipsSchema = new Schema({
    year: Number,
    month: Number,
    title: String,
    body: String
});

mongoose.model("tips", tipsSchema);