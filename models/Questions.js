const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const questionSchema = new Schema({
    year: Number,
    month: Number,
    title: String,
    body: String
});

questionSchema.plugin(AutoIncrement, {inc_field: 'question_id'});
mongoose.model("questions", questionSchema);