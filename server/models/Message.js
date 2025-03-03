const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

const secretKey = "your_secret_key"; // Keep this secure

const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Encrypt message before saving
MessageSchema.pre("save", function (next) {
  this.message = CryptoJS.AES.encrypt(this.message, secretKey).toString();
  next();
});

// Decrypt message when retrieving
MessageSchema.methods.decryptMessage = function () {
  const bytes = CryptoJS.AES.decrypt(this.message, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

module.exports = mongoose.model("Message", MessageSchema);
