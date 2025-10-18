import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  rating: Number,
  description: String,
  category: String, // "hotel", "restaurant", "attraction", "transport"
});

export default mongoose.model("Place", placeSchema);