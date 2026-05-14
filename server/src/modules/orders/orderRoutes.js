import { Router } from 'express';
import * as OrderController from './orderController.js';
import { doubleCsrfProtection } from '../../common/middleware/csrf.js';
import { checkAuth } from '../../common/middleware/checkAuth.js';






const router =  Router();



export default router;