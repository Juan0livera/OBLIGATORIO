import express from "express";
import { getRecipesByIngredientController } from "../../controllers/api-externas.controller.js";

const publicRoutes = express.Router();

publicRoutes.get( "/recipes", getRecipesByIngredientController);


export default publicRoutes;