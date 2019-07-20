const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: {},
    description: {},
    duration: {},
    date: {}
  },
  {
    timestamps: true
  }
);

const Excercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Excercise;
