import { Sequelize } from "sequelize";

const sequelize = new Sequelize("typescriptuser","root",
"password",
{
    dialect:"mysql",
    host:"localhost",
 
})
export default sequelize;