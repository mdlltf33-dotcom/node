import Place from "../models/placeModel.js";

export const getHotels = async (req, res) => {
  try {
    const hotels = await Place.find({ category: "hotel" });
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};