const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

/*
const bcrypt = require("bcrypt");

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
    }
});

//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
});*/

userSchema.plugin(AutoIncrement, {inc_field: 'user_id'});
mongoose.model("user", userSchema);