import bcrypt from "bcrypt";
import User from "../models/user";
import { generateToken } from "../utils/jwt";
import { imageLink } from "../utils/imageLink";

export const register = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const image = imageLink(req.file.path);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      image,
    });
    await user.save();

    const token = generateToken(user._id);

    const userWithoutPassword: any = { ...user.toObject() };
    delete userWithoutPassword.password;

    res.status(200).json({
      message: "User registered successfully",
      user: userWithoutPassword,
      token,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateToken(user._id);

    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(500).json({ message: "Failed to login" });
  }
};
