import commentModel from "../../Database/Models/comment.model.js";
import postModel from "../../Database/Models/post.model.js";
import userModel from './../../Database/Models/user.model.js';
/*<------------Create Comment-------->*/

async function  createComment(req,res,next){
    const {userId,postId}=req.body;
    const uId=await userModel.findOne({where:{id:userId}})
    const pId=await postModel.findOne({where:{id:postId}})
    if(uId){
        if(pId){
            await commentModel.create(req.body)
            return  res.json({message:"comment added successfully"})
        }
        else{
            return res.json({message:"post is not found"})
        }
    }
    else res.json({message:"user is not found"})
}
/*<------------read  Comments-------->*/

async function readComments(req,res,next){
      res.json(await commentModel.findAll({include:postModel})
    )
}
/*<------------update  Comments-------->*/
async function updateComment(req,res,next){
    const {id}=req.params;
    const comment=await commentModel.findOne({where:{id}})
    if(comment){
        req.body.id=id;
        await commentModel.update(req.body,{where:{id}})
        return res.json({message:"comment updated"})
    }
    res.json({message :"comment is not found "})
}
/*<------------Delete  Comments-------->*/
async function deleteComment(req,res,next){
    const {id}=req.params;
    const comment=await commentModel.findOne({where:{id}})
    if(comment){
        await commentModel.destroy({where:{id}})
        return res.json({message:"comment deleted"})
    }
    res.json({message :"comment is not found "})
}

export {createComment,readComments,updateComment,deleteComment}