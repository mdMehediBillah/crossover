import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    fullName: { type: String, required: [true, "FullName is required"] },

    email: {
      type: String,
      required: [true, "email is required"],
    },
    message: { type: String, required: [true, "message is required"] },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
