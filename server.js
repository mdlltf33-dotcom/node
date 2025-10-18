import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import placesRoutes from "./routes/placesRoutes.js";
import hotelsRoutes from "./routes/hotelsRoutes.js";
import restaurantsRoutes from "./routes/restaurantsRoutes.js";
import transportRoutes from "./routes/transportRoutes.js";
import os from "os";
import { networkInterfaces } from "os";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Routes
app.use("/api/auth", authRoutes);
app.use("/api/places", placesRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/restaurants", restaurantsRoutes);
app.use("/api/transport", transportRoutes);

// 🖨️ طباعة عنوان السيرفر المحلي
const getLocalIP = () => {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "localhost";
};

const PORT = process.env.PORT || 5000;
const HOST = getLocalIP();

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on: http://${HOST}:${PORT}`);
});
