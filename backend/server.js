const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });


const BookingSchema = new mongoose.Schema({
   name:String,
    email:String,
    subject:String,
    number:String,
    message:String,
    checkin:String,
    checkout:String,
    guests:Number,
    roomtype:String
});

const Booking = mongoose.model("Booking", BookingSchema);

app.post("/booking", async (req, res) => {
  try {
    await Booking.create(req.body);
    res.json({ success: true, message: "Booking saved" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
app.get("/", (req, res) => {
  res.send("Backend is running");
});


app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.error("❌ Fetch bookings error:", err.message);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



