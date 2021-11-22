const mongoose = require("mongoose");
const dotenv = require("dotenv");


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

dotenv.config();
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);