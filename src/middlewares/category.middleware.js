import { validateRequired } from "./validate.middleware.js";


import { createCategoryBodySchema, updateCategoryBodySchema} from "../schemas/categories.schemas.js";

export const middlewareValidateBodyCreateCategory = validateRequired
(
    createCategoryBodySchema, "body"
)

export const middlewareValidateBodyUpdateCategory = validateRequired
(
    updateCategoryBodySchema, "body"
)