
// models/hotelModel.js
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    image: { type: String }, // رابط الصورة أو مسار
    rating: { type: Number, default: 0 },
    description: { type: String },
    pricePerNight: { type: Number, default: 0 },
    // يمكنك إضافة حقول أخرى مثل amenities, rooms, contact
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
