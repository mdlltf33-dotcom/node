
// models/restaurantModel.js
import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    image: { type: String },
    rating: { type: Number, default: 0 },
    description: { type: String },
    cuisineType: { type: String }, // نوع المأكولات (سوري، بحري، ... )
    // يمكنك إضافة phone, openingHours, menuUrl
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);

