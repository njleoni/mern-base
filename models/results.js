const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    userName: { type: String },
    answers: [],
    votes: Number,
  },
  {
    collection: "results",
  }
);

const Results = mongoose.model("Results", resultSchema);

module.exports = Results;
