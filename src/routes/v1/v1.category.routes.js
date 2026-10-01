import express from 'express';

import  { createCategoryController , deleteCategoryController, getAllCategoriesController, getCategoryByIdController, updateCategoryController}  from '../../controllers/categories.controller.js';
import { middlewareValidateBodyCreateCategory, middlewareValidateBodyUpdateCategory } from '../../middlewares/category.middleware.js'
import {  authMiddleware } from "../../middlewares/auth.middleware.js";
import { adminMiddleware } from '../../middlewares/admin.middleware.js';


const categoryRoutes = express.Router();

categoryRoutes.use(authMiddleware);
categoryRoutes.post("/", adminMiddleware, middlewareValidateBodyCreateCategory, createCategoryController)
categoryRoutes.get( "/", getAllCategoriesController);
categoryRoutes.get("/:id", getCategoryByIdController);
categoryRoutes.patch( "/:id", adminMiddleware, middlewareValidateBodyUpdateCategory, updateCategoryController);
categoryRoutes.delete("/:id",  adminMiddleware, deleteCategoryController);

export default categoryRoutes;