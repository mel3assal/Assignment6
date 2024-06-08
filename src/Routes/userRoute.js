import { signUp,signIn,getUserWithDetails} from "../Controllers/userController.js";
import express from "express";
const userRouter=express.Router();
userRouter.post("/signUp",signUp);
userRouter.post("/signIn",signIn);
userRouter.get("/:id/:postId",getUserWithDetails);
export default userRouter;
