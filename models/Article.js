const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const articleSchema = new Schema({
    id: Number,
    year: Number,
    month: Number,
    title: String,
    body: String
});

articleSchema.plugin(AutoIncrement, {inc_field: 'article_id'});
mongoose.model("articles", articleSchema);