import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.secretKey);
  return token;
};
