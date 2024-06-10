import createError from "http-errors";
import Comment from "../models/commentModel.js";

// ===========================================================================================
// Create new comment
// ===========================================================================================

export const createComment = async (req, res, next) => {
  try {
    const newComment = new Comment(req.body);
    const saveNewComment = await newComment.save();

    return res.status(201).json({
      success: true,
      comment: saveNewComment,
      message: "Comment is successfully created!",
    });
  } catch (error) {
    console.log(error);
    return next(
      createError(500, "You are unable to create an comment! please try again!")
    );
  }
};

// ===========================================================================================
// Get single comment
// ===========================================================================================

export const getComment = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return next(createError(500, "Comment not found! please try again!"));
    }

    return res.status(200).json({
      success: true,
      comment: comment,
    });
  } catch (error) {
    console.log(error);
    return next(
      createError(500, "You are unable to get a comment! please try again!")
    );
  }
};

// ===========================================================================================
// Get All comments
// ===========================================================================================

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();

    if (!comments) {
      return next(createError(500, "Comments not found! please try again!"));
    }

    return res.status(200).json({
      success: true,
      comments: comments,
    });
  } catch (error) {
    console.log(error);
    return next(
      createError(500, "You are unable to access comments! please try again!")
    );
  }
};

// ===========================================================================================
// Delete single comment
// ===========================================================================================

export const deleteComment = async (req, res, next) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "comment is successfully deleted",
    });
  } catch (error) {
    console.log(error);
    return next(
      createError(500, "You are unable to access comments! please try again!")
    );
  }
};
