import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // ✅ Fixed from 'require' to 'import'
dotenv.config();

const app = express();

app.use(express.json());

// ✅ CORS setup (frontend → backend)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Standard Vite port
      "http://localhost:5174",
      "https://www.prakashjha.com",
      "https://prakashjha.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Connect MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB Connected"); // Added log for confirmation
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
connectDB();

// ✅ Schema (Added trim:true for extra safety)
const formSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});
const Form = mongoose.model("form", formSchema);

// ✅ Health Check Route (Stops the "Cannot GET /" message)
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Live! 🚀");
});

app.post("/api/submit-form", async (req, res) => {
  try {
    console.log("Incoming data:", req.body);

    // 1. Extract and manually trim for the check
    const name = req.body.name?.trim();
    const email = req.body.email?.trim();
    const message = req.body.message?.trim();

    // 2. Final Guard (Stops empty spaces from getting to DB)
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required and cannot be empty!" });
    }

    const newForm = new Form({ name, email, message });
    await newForm.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("❌ Form submission error:", error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ Start server (Fixed for Render deployment)
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});