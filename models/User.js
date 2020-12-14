const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  profile_pic: String
});

module.exports = mongoose.model("User", userSchema, "users");
