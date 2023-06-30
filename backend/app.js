import express from "express";
import authRoutes from "./routes/authRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";

import cors from "cors";

import { connectToDB } from "./utils/connectToDB.js";
import { upload } from "./utils/upload.js";
import authentication from "./middlewares/authentication.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

connectToDB();


app.use(express.json());

app.get('/', (req, res) => {
  //to redeploy
  res.send("Welcome to Femto Server!");
})

// Add the following middleware to set the Access-Control-Allow-Origin header
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://femto-react.vercel.app");
  next();
});

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", upload.single("image"), authRoutes);
app.use("/api/goals", authentication, goalRoutes);

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
