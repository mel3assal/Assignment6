import { Sequelize } from "sequelize";
const sequelize=new Sequelize('mysql://uc6glbwigrr3khtu:hTbdT0L431QfiH7gkP6X@b2uskncodrc8ppa9kvgr-mysql.services.clever-cloud.com:3306/b2uskncodrc8ppa9kvgr');
sequelize.authenticate().catch(()=>console.log("error in db")).then(()=>(console.log("db connected")));
export default sequelize;