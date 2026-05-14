import { Router } from 'express';
import * as  userController  from './usersControllers.js';
import { body } from 'express-validator';
import authMidlleware from '../auth/authMidlleware/authMidlleware.js';
import { sessionMiddleware } from '../../common/session/session.js';
import { checkRole } from '../../common/middleware/checkRole.js';
import { doubleCsrfProtection } from '../../common/middleware/csrf.js';

const router =  Router();


export default router;

