import express from "express";
import {
  createComment,
  deleteComment,
  getComment,
  getComments,
} from "../controllers/commentController.js";
import { authAdmin } from "../middlewares/auth.js";

const commentRouter = express.Router();

commentRouter.post("/new-comment", createComment);
commentRouter.get("/", getComments);
commentRouter.get("/:id", authAdmin, getComment);
commentRouter.delete("/:id", authAdmin, deleteComment);

export default commentRouter;
