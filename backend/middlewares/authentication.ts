import jwt from "jsonwebtoken";
require("dotenv").config();

const authentication = (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization;

    const decodedToken: any = jwt.verify(
      token,
      process.env.secretKey as string
    );

    req.id = decodedToken.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

export default authentication;
