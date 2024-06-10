import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db/mongo.js";
import dotenv from "dotenv";

import userRouter from "./routes/userRoutes.js";
import commentRouter from "./routes/commentRoutes.js";
import authRouter from "./routes/authRoutes.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";



// Express app
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://corossover-app"],
    credentials: true,
  })
);
app.use(express.json());

dotenv.config();

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/comments", commentRouter)

// Port
const port = process.env.PORT || 4000;

// Global error handler
app.use(globalErrorHandler);

// Server Listner
app.listen(port, () => {
  console.log(`The server starts on port ${port}`);
});
