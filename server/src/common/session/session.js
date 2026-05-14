import session from "express-session";
import ConnectSessionSequelize from "connect-session-sequelize";
import sequelize from "../../config/db.js";
import { Session } from "../../config/initModels.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.production" });

const SequelizeStore = ConnectSessionSequelize(session.Store);
export const sessionStore = new SequelizeStore({
  
});
sessionStore.expiration = 5 * 60 * 1000;
sessionStore.startExpiringSessions();

export const sessionMiddleware = session({
  
  cookie: {
    
  },
});
