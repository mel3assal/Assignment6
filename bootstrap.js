import sequelize from "./Database/connection.js";
import userRouter from "./src/Routes/userRoute.js";
import commentRouter from './src/Routes/commentRoute.js';
import postRouter from './src/Routes/postRoute.js';
import cors from "cors";
app.use(cors());
const  bootstrap=(app,express)=>{
    sequelize.sync({alter:true});
    app.use(express.json());
    app.use('/user',userRouter);
    app.use('/comment',commentRouter)
    app.use('/post',postRouter)
    app.use('*',(req,res)=>{
        res.status(404).send("page Not Found");
    })
}
export default bootstrap
