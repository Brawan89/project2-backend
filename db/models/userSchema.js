const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passward: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  phoneNumber: [{ type: Number }],
  age: { type: Number },
});

module.exports = mongoose.model("User", userSchema);
