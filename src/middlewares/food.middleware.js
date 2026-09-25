import { validateRequired } from "./validate.middleware.js";


import { createFoodBodySchema, updateFoodBodySchema } from "../schemas/food.schemas.js";

export const middlewareValidateBodyCreateFood = validateRequired( createFoodBodySchema, "body" );

export const middlewareValidateBodyUpdateFood = validateRequired( updateFoodBodySchema, "body");