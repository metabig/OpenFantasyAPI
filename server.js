import cors from "cors";
import express from "express";
import playerRoutes from "./src/routes/player.routes.js";
import mongoose from "mongoose";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connect to the database
mongoose
  .connect("mongodb://localhost:27017/MyCustomFantasyLeage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => {
    console.error("Could not connect to MongoDB...", err);
    process.exit();
  });

app.use("/api/players", playerRoutes);
export default app;
