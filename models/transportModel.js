
// models/transportModel.js
import mongoose from "mongoose";

const transportSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    image: { type: String },
    rating: { type: Number, default: 0 },
    description: { type: String },
    type: { type: String }, // تاكسي، باص، تأجير، ...
    fare: { type: Number, default: 0 }, // سعر/تعرفة تقريبية
    // يمكنك إضافة phone, schedule
  },
  { timestamps: true }
);

export default mongoose.model("Transport", transportSchema);
