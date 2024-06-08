import { DataTypes } from "sequelize";
import sequelize from "../connection.js";
const commentModel=sequelize.define('comment',{
    content:{
        type:DataTypes.STRING(1000),
        allowNull:false
    }
        
})
export default commentModel;