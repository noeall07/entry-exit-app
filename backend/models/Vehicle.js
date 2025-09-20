// backend/models/Vehicle.js
const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vehicleNumber: { type: String, required: true },
  ownerName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  status: { type: String, enum: ["active", "exited"], default: "active" },
  entryTime: { type: Date, default: Date.now },
  exitTime: { type: Date },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
