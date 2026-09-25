import express from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware.js';
import { middlewareValidateBodyCreateFood, middlewareValidateBodyUpdateFood } from '../../middlewares/food.middleware.js';
import { createFoodController, deleteFoodController, getAllFoodsController, getFoodByIdController, updateFoodController} from '../../controllers/food.controller.js';




const foodRoutes = express.Router();

foodRoutes.use(authMiddleware);
foodRoutes.post("/", middlewareValidateBodyCreateFood, createFoodController);
foodRoutes.get("/",  getAllFoodsController);
foodRoutes.get("/:id", getFoodByIdController);
foodRoutes.patch("/:id", middlewareValidateBodyUpdateFood,updateFoodController);
foodRoutes.delete("/:id", deleteFoodController)


export default foodRoutes;