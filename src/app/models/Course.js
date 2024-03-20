const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  description: String,
  createAt: Date,
  updateAt: Date,
});

module.exports = mongoose.model("Course", Course);
