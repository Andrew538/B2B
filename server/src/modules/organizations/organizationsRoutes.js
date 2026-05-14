import { Router } from 'express';
import * as getManagerOrganizations from './organizationsControllers.js'
import * as createOrganization from './organizationsControllers.js'; 
import { checkRole } from '../../common/middleware/checkRole.js';

const router =  Router();


export default router