import jwt from "jsonwebtoken";
require("dotenv").config();

export const generateToken = (userId: any) => {
  const token = jwt.sign({ userId }, process.env.secretKey as any);
  return token;
};
