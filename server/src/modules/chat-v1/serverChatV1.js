import { Server } from "socket.io";
import { ChatServiceV1 } from "./serviceChatV1.js";

const chatService = new ChatServiceV1();

export const initSocket = (server, sessionMiddleware) => {
  const io = new Server(server, {
    pingTimeout: 5000, // Ждать ответа от клиента 5 секунд
    pingInterval: 10000, // Пинговать клиента каждые 10 секунд
    cors: {
      origin: [
  "http://localhost:5173",
],
      credentials: true,
    },
    transports: ["websocket", "polling"],
  });

  io.engine.use(sessionMiddleware);
  io.on("connection", async (socket) => {
  })
};
