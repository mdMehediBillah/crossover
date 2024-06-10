import express from "express";
import {
  createComment,
  deleteComment,
  getComment,
  getComments,
} from "../controllers/commentController.js";

const commentRouter = express.Router();

commentRouter.post("/new-comment", createComment);
commentRouter.get("/", getComments);
commentRouter.get("/:id", getComment);
commentRouter.delete("/:id", deleteComment);

export default commentRouter;
