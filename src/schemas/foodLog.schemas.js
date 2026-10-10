import Joi from "joi";



export const createFoodLogBodySchema = Joi.object({

    food : Joi.string().hex().length(24).required(),

    meal : Joi.string().valid().optional(),

    consumedAt : Joi.date().iso().optional()
})


