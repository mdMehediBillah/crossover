import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB is connected!")
  } catch (error) {
    console.log(error);
  }
};

connectToMongoDB();
