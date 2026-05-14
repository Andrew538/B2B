import express from "express";
import "express-async-errors";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import cookieParser from "cookie-parser";
import { doubleCsrf } from "csrf-csrf";
import { privateRouter, publicRouter } from "./routes.js";
import errorMiddleware from "./common/error/errorMiddleware.js";
import { sessionMiddleware } from "./common/session/session.js";
import { doubleCsrfProtection, generateCsrfToken } from "./common/middleware/csrf.js";
import { checkAuth } from "./common/middleware/checkAuth.js";

app.use("/api", publicRouter); 

app.use("/api", privateRouter); 

app.use(errorMiddleware);

export default app;


