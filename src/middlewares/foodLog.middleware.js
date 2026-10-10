import { validateRequired } from "./validate.middleware.js";

import { createFoodLogBodySchema} from "../schemas/foodLog.schemas.js"

export const middlewareValidateBodyCreateFoodLog = validateRequired( createFoodLogBodySchema , "body");