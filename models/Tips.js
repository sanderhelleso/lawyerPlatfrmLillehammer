const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const tipsSchema = new Schema({
    year: Number,
    month: Number,
    title: String,
    body: String
});

tipsSchema.plugin(AutoIncrement, {inc_field: 'tips_id'});
mongoose.model("tips", tipsSchema);