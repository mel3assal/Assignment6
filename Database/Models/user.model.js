import { DataTypes } from "sequelize";
import sequelize from "../connection.js";
import postModel from "./post.model.js";
import commentModel from "./comment.model.js";
const userModel = sequelize.define('user', {
    userName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
})
userModel.hasMany(postModel)
userModel.hasMany(commentModel)
postModel.belongsTo(userModel)
commentModel.belongsTo(userModel)
postModel.hasMany(commentModel)
commentModel.belongsTo(postModel)





export default userModel