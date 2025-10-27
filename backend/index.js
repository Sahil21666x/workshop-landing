import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import appRoutes from './routes/workShopRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(appRoutes)

//  Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));



// Health Check
app.get("/", (req, res) => {
  res.send("✅ Digiskill Academy Backend with MongoDB is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
