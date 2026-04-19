import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import queryRoutes from "./routes/query.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
  }));
app.use("/api", queryRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

// ✅ SINGLE MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:");
    console.error(err.message);
  });