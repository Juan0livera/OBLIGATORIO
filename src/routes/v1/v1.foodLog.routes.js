import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware.js';
import { middlewareValidateBodyCreateFoodLog } from '../../middlewares/foodLog.middleware.js';
import { createFoodLogController } from '../../controllers/foodLog.controller.js';


const foodLogRoutes = Router();

foodLogRoutes.use(authMiddleware);
foodLogRoutes.post("/", middlewareValidateBodyCreateFoodLog, createFoodLogController);



export default foodLogRoutes;