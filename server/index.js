import http from 'http'; // Добавляем встроенный модуль http
import { authenticate, sync } from './src/config/db.js';
import app from './src/app.js';
import { sessionMiddleware, sessionStore } from './src/common/session/session.js';
import { initSocket } from './src/modules/chat-v1/serverChatV1.js';

const PORT = 7000;

// 1. Создаем HTTP сервер на базе Express 
const server = http.createServer(app);

// 2. Инициализируем сокеты, передавая созданный сервер
initSocket(server, sessionMiddleware);

const start = async () => {
    try {
        await authenticate();
        await sync();
        await sessionStore.sync(); 
    
        //Слушаем порт через server, а не через app
        server.listen(PORT, () => console.log('Сервер и сокеты запущены на порту', PORT));
        
    } catch (error) {
        console.error('Ошибка при запуске:', error);
    }
};

start();


