import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

dotenv.config();

// ✅ Enable JSON body parsing
app.use(express.json());

// ✅ CORS setup (frontend → backend)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.prakashjha.com",
      "https://prakashjha.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Connect MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
connectDB();

// ✅ Schema
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Form = mongoose.model("form", formSchema);

// ✅ POST route
app.post("/api/submit-form", async (req, res) => {
  try {
    console.log("Incoming data:", req.body); // log what’s being sent

    const { name, email, message } = req.body;

    // Check if any field is missing
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newForm = new Form({ name, email, message });
    await newForm.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("❌ Form submission error:", error);
    res.status(500).json({ message: error.message });
  }
});
// ✅ Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
