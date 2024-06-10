import express from "express"

const commentRouter = express.Router()

commentRouter.post("/new-comment")
commentRouter.get("/")
commentRouter.get("/:id")
commentRouter.delete("/:id")


export default commentRouter