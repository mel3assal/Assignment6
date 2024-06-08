import bcrypt from "bcryptjs"
import userModel from "../../Database/Models/user.model.js"
import postModel from "../../Database/Models/post.model.js";
import commentModel from "../../Database/Models/comment.model.js";
import { where } from "sequelize";
/*<-------sign up--------->*/
async function signUp(req, res, next) {
       const { password, email } = req.body;
       const user = await userModel.findOne({ where: { email } })
       if (user) return res.json({ message: "User already exists" })
       const hashpassword = bcrypt.hashSync(password, 8);
       req.body.password = hashpassword;
       userModel.create(req.body)
       res.json({ message: "user Created" })
}
/*<-------sign in--------->*/

async function signIn(req, res, next) {
       const { email, password } = req.body;
       const user = await userModel.findOne({ where: { email } })
       if (user) {
              const match = bcrypt.compareSync(user.password, password)
              if (match) return res.json({ message: "Login success", user })
              else { return res.json({ message: "Invalid email or password" }) }
       }
       else { return res.json({ message: "User not found" }) }
}

async function getUserWithDetails(req, res, next) {
       const { id, postId } = req.params;
       const user = await userModel.findOne({ where: { id } });
       const post = await postModel.findOne({ where: { id: postId } });
       if (!user) return res.json({ message: "User not found" })
       if (!post) return res.json({ message: "Post not found" })
       if (user.id != post.userId) { return res.json({ message: "this post is not related to this user" }) }
       const newUser = await userModel.findByPk(id, {
              include: [{
                     model: postModel,
                     as: 'posts',
                     where: { id: postId },
                     include: { model: commentModel, as: 'comments' }
              }]
       });
       res.json(newUser)
}
export { signUp, signIn, getUserWithDetails }