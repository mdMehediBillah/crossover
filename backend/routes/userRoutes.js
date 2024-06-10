import express from "express";
import { getUser, getUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/:id", getUser);
userRouter.get("/",  getUsers);

export default userRouter;
