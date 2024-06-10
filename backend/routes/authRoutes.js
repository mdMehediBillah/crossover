import express from "express";
import {
  createUser,
  deleteUserAccount,
  loginUser,
  userLogout,
} from "../controllers/authController.js";
import { authAdmin } from "../middlewares/auth.js";

const authRouter = express.Router();

authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);
authRouter.get("/logout", userLogout);
authRouter.delete("/:id",  deleteUserAccount);

export default authRouter;
