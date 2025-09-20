// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Vehicle = require("./models/Vehicle");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Routes
app.get("/", (req, res) => {
  res.send("Entry-Exit Backend API is running ✅");
});

// Add vehicle entry
app.post("/api/vehicles/entry", async (req, res) => {
  try {
    const { vehicleNumber, ownerName, phoneNumber } = req.body;

    const newVehicle = new Vehicle({
      vehicleNumber,
      ownerName,
      phoneNumber,
      status: "active",
      entryTime: new Date(),
    });

    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ error: "Failed to register entry" });
  }
});

// Exit vehicle
app.post("/api/vehicles/exit/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

    vehicle.status = "exited";
    vehicle.exitTime = new Date();

    await vehicle.save();
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: "Failed to register exit" });
  }
});

// Get all vehicles
app.get("/api/vehicles", async (req, res) => {
  try {
    const vehicles = await Vehicle.find().sort({ entryTime: -1 });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
