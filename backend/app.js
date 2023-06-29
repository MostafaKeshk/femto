import express from "express";
import authRoutes from "./routes/authRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";

import cors from "cors";

import { connectToDB } from "./utils/connectToDB.js";
import { upload } from "./utils/upload.js";
import authentication from "./middlewares/authentication.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectToDB();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", upload.single("image"), authRoutes);
app.use("/api/goals", authentication, goalRoutes);

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
