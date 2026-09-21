import express from 'express';

import  { createCategoryController , deleteCategoryController, getAllCategoriesController, getCategoryByIdController, updateCategoryController}  from '../../controllers/categories.controller.js';
import { middlewareValidateBodyCreateCategory, middlewareValidateBodyUpdateCategory } from '../../middlewares/category.middleware.js'
import {    authMiddleware } from "../../middlewares/auth.middleware.js";


const categoryRoutes = express.Router();

categoryRoutes.use(authMiddleware);

categoryRoutes.post("/", middlewareValidateBodyCreateCategory, createCategoryController)

categoryRoutes.get( "/", getAllCategoriesController);

categoryRoutes.get("/:id", getCategoryByIdController);

categoryRoutes.patch( "/:id", middlewareValidateBodyUpdateCategory, updateCategoryController);

categoryRoutes.delete("/:id",  deleteCategoryController);

export default categoryRoutes;