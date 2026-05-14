import axios from "axios";
import { authStore } from "../store/AuthStore.js";
// Используем встроенный флаг Vite для проверки режима
const isProd = import.meta.env.PROD;


export const API_URL = isProd 
  ? "http://.ru/"  
  : "http://localhost:7000/";     // Локальный сервер Node.js



const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true 
});



export { $api };
