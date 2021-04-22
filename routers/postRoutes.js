import express from "express";
const router = express.Router();
import * as postController from "../controllers/postController";
import { verifyToken } from "../controllers/authController"

router
  .route("/")
  .get(postController.getAllPost)
  .post(verifyToken, postController.createPost);

router
  .route("/:postId")
  .get(postController.getPost)
  .patch(verifyToken, postController.updatePost)
  .delete(verifyToken, postController.deletePost);

export default router;
