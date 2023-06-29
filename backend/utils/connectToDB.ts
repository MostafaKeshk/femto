import mongoose from "mongoose";
require("dotenv").config();

export const connectToDB = () => {
  mongoose
    .connect(process.env.DB_URI as any)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));
};
