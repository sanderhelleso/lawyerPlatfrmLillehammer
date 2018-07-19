const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
      },
      passwordConf: {
        type: String,
        required: true,
      }
});

userSchema.plugin(AutoIncrement, {inc_field: 'tips_id'});
mongoose.model("user", userSchema);