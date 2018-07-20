const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const articleSchema = new Schema({
    id: Number,
    monthIntro: String,
    year: Number,
    month: Number,
    title: String,
    intro: String,
    body: String
});

articleSchema.plugin(AutoIncrement, {inc_field: 'article_id'});
mongoose.model("articles", articleSchema);