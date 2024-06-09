import { where } from "sequelize";
import postModel from "../../Database/Models/post.model.js"
import userModel from './../../Database/Models/user.model.js';
/*<--------Create Post------->*/
async  function  createPost(req,res,next){
       const {userId}=req.params;
       const id= await userModel.findOne({where:{id:userId}})
       if(id){
              req.body.userId=userId
              await postModel.create(req.body)
              return res.json({message:"post created"})
       }
       res.json({message:"user is not found"})
}
/*<--------read Post with the author ------->*/

async function readPosts(req,res,next){
         const posts= await postModel.findAll({include:userModel}) 
         res.json({message:"posts",posts})    
}

async function getPost(req,res,next){
       const {id}=req.params;
       let post =await postModel.findOne({where:{id:id}})
       if(!post) return res.json({message:"post not found"})
       post=await postModel.findOne({where:{id:id},include:userModel})
       res.json({message:"post",post})
}
/*<--------update Post------->*/

async function updatePost(req, res, next) {
       const { id, userId } = req.params;
       const post = await postModel.findByPk(id)
       const user = await userModel.findOne({ where: { id: userId } })
       if(post==null){return res.json({message:"post not found"})}
       if (user==null || post.userId!=userId) return res.json({ message: "this user is not found" })
       if (post) {
              req.body.id = id
              req.body.userId = userId
              await postModel.update(req.body, { where: {id} })
              return res.json({ message: "post updated" })
       }
}    

/*<--------Delete Post------->*/
async function deletePost(req,res,next){
       const { id, userId } = req.params;
       const post = await postModel.findByPk(id)
       const user = await userModel.findOne({ where: { id: userId } })
       if(post==null){return res.json({message:"post not found"})}
       if (user==null || post.userId!=userId) return res.json({ message: "this user is not found" })
       if (post) {
              await postModel.destroy({ where: {id} })
              return res.json({ message: "post deleted" })
       }

}
export {createPost,readPosts,updatePost,deletePost,getPost}
