import { Router } from 'express';
import usersRoutes from './modules/users/usersRoutes.js';
import categoryRoutes from './modules/catalog/category/categoryRoutes.js';
import productsRoutes from './modules/catalog/products/productsRoutes.js';
import uploadingFilesRoutes from './common/uploadingFiles/uploadingFilesRoutes.js';
import imagesRoute from './common/uploadingImages/uploadingImagesRouter.js'
import deliveryRouter from './modules/deliveryPoint/deliveryPointRoutes.js'
import basketRouter from './modules/basket/BAsketRoutes.js';
import orderRouter from './modules/orders/orderRoutes.js'
import downloadTemplateRouter from './common/price/priceRoutes.js'
import newRout from './common/priceOfProductList/priceOfProductRoutes.js'
import { doubleCsrfProtection } from './common/middleware/csrf.js';
import managerOrg from './modules/organizations/organizationsRoutes.js'
import chat from './modules/chat-v1/ruoutesChatV1.js'
import uploadImage from './modules/catalog/productImages/productImagesRoutes.js'
const apiRouter = new Router();


export const publicRouter = Router();



export const privateRouter = Router();


export default apiRouter;


