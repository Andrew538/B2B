import { createContext } from "react";
import { authStore } from "./store/AuthStore.js";

export const Context = createContext({ store: authStore });
