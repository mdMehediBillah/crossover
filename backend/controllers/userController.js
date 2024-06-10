import User from "../models/userModel.js";
import createError from "http-errors";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users) {
      return next(createError(404, "Users do not exist!"));
    }

    res.status(200).json({
      success: true,
      users: users,
    });
  } catch (error) {}
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(createError(404, "User not found!"));
    }

    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {}
};
