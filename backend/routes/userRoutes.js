import express from "express";
import { getUser, getUsers } from "../controllers/userController.js";
import { authAdmin } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get("/:id", getUser);
userRouter.get("/", authAdmin,  getUsers);

export default userRouter;
