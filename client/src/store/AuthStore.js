import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import AuthSevice from "../services/authService/AuthService.js";
import { API_URL, initAuth, setCsrfToken } from "../services/index.js";

class Store {

}

export const authStore = new Store();
