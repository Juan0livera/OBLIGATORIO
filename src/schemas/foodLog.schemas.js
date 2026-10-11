import Joi from "joi";



export const createFoodLogBodySchema = Joi.object({

    food : Joi.string().hex().length(24).required(),

    meal : Joi.string().optional(),

    quantity : Joi.number().positive().required(),

    consumedAt : Joi.date().iso().optional()
})


