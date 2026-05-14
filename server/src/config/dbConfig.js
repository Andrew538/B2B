import dotenv from 'dotenv';
dotenv.config({ path: '.env.production' }); 


export const dbConfig = {
    database: process.env.DB_NAME,  
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    timezone: '+00:00',
    dialectOptions: {
        useUTC: true,
    },
    logging: false, 
    pool: {
        max: 50,          // Максимум 50 параллельных запросов к БД
        min: 5,           // Минимум 5 всегда открытых соединений
        acquire: 30000,   // Ждать соединения не более 30 сек
        idle: 10000       // Закрыть лишние соединения через 10 сек простоя
    }
};


