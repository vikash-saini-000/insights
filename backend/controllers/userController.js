import User from "../models/User.js";

export const storeUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newUser = await User.create({
      identifier,
      password,
    });

    res.status(201).json({
      message: "Data stored successfully",
      user: newUser,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }); // Newest first
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};