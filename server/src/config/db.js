import { Sequelize } from "sequelize";
import { dbConfig } from "./dbConfig.js";


const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig, 
  {
    dialect: dbConfig.dialect,
    timezone: dbConfig.timezone, 
    dialectOptions: dbConfig.dialectOptions,
    host: dbConfig.host, 
    port: dbConfig.port,
   
  }
);

// Функция для проверки подключения 
export const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    throw error;
  } 
};

export const sync = async () => {
  try {

    await sequelize.sync({ alter: true }); // alter обновляет таблицы без удаления данных
    console.log("✅ Database synchronized.");
  } catch (error) {
    console.error("❌ Sync error:", error);
  }
};

export default sequelize;
