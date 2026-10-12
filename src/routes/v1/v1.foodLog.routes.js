import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware.js';
import { middlewareValidateBodyCreateFoodLog } from '../../middlewares/foodLog.middleware.js';
import { createFoodLogController, getAllFoodLogByUserController, deleteFoodLogContoller } from '../../controllers/foodLog.controller.js';



const foodLogRoutes = Router();

foodLogRoutes.use(authMiddleware);
foodLogRoutes.post("/", middlewareValidateBodyCreateFoodLog, createFoodLogController);
foodLogRoutes.get("/", authMiddleware, getAllFoodLogByUserController);
foodLogRoutes.delete("/:id", deleteFoodLogContoller);


export default foodLogRoutes;