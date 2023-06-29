import bcrypt from "bcrypt";
import User from "../models/user.js";
import { generateToken } from "../utils/jwt.js";
import { imageLink } from "../utils/imageLink.js";

export const register = async (req, res) => {
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

    const userWithoutPassword = { ...user.toObject() };
    delete userWithoutPassword.password;

    res.status(200).json({
      message: "User registered successfully",
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(403).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    const userWithoutPassword = { ...user.toObject() };
    delete userWithoutPassword.password;

    res.status(200).json({ message: "Login successful", user:userWithoutPassword, token });
  } catch (error) {
    console.log({error})
    res.status(500).json({ message: "Failed to login" });
  }
};

export const updateUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;
    const image = imageLink(req.file.path);
    const userId = req.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.image = image || user.image;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    const userWithoutPassword = { ...user.toObject() };
    delete userWithoutPassword.password;

    res.status(200).json({
      message: "User updated successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.log({error})
    res.status(500).json({ message: "Failed to update user" });
  }
};

