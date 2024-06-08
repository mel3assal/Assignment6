import { DataTypes } from "sequelize";
import sequelize from "../../Database/connection.js";

const postModel=sequelize.define('post',{
    title:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    }
})
export default postModel