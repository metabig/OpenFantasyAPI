import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema(
  {
    name: String,
    position: String,
    team: String,
    age: Number,
    games: Number,
    goals: Number,
    assists: Number,
    yellowCards: Number,
    redCards: Number,
    rating: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Player", PlayerSchema);
