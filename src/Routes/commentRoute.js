import { createComment,readComments,updateComment,deleteComment } from "../Controllers/commentController.js";
import express from "express";
const commentRouter=express.Router();
commentRouter.post("/createComment", createComment);
commentRouter.get("/readComments", readComments);
commentRouter.put("/:id", updateComment);
commentRouter.delete("/:id", deleteComment);
export default commentRouter;
