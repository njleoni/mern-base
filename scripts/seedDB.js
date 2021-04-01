const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Data

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/template");

const template = [
  {
    category: "Date1",
    type: "seedData1",
    numeric: 10000,
  },
  {
    category: "Date2",
    type: "seedData2",
    numeric: 10001,
  }
];

db.TaxData.remove({})
  .then(() => db.TaxData.collection.insertMany(template))
  .then((data) => {
    console.log(data.result.n + " Records Inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
