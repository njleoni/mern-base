const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taxSchema = new Schema(
  {
    category: { type: String, required: true },
    type: { type: String, required: true },
    returns: { type: Number, required: false },
    base: { type: Number, required: true },
    rate: { type: Number, required: true },
    amount: { type: Number, required: true },
    caption: { type: String, required: true },
  },
  {
    collection: "taxdata",
  }
);

const TaxData = mongoose.model("TaxData", taxSchema);

module.exports = TaxData;
