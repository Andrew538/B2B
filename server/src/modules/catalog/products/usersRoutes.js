import { Router } from 'express';
import * as  userController  from './usersControllers.js';
import { body } from 'express-validator';
import authMidlleware from '../auth/authMidlleware/authMidlleware.js';
import { sessionMiddleware } from '../../common/session/session.js';

const router =  Router();




export default router;