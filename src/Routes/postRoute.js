import { createPost,readPosts,updatePost,deletePost,getPost } from "../Controllers/postController.js";
import express from "express";
const postRouter=express.Router();
postRouter.post("/createPost/:userId", createPost);
postRouter.get("/readPosts", readPosts);
postRouter.put('/:id/:userId',updatePost)
postRouter.delete('/:id/:userId',deletePost)
postRouter.get("/:id", getPost);
export default postRouter;
