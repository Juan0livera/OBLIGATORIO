import { paramsIdTareaSchema } from "../schemas/common.schemas.js";
import { validateRequired } from "./validate.middleware.js";


export const validateParamsIdTareaMiddleware = validateRequired(paramsIdTareaSchema, "params");