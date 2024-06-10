import express from "express"
import { getUsers } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.get("/:id")
userRouter.get("/", getUsers)
userRouter.delete("/:id")

export default userRouter