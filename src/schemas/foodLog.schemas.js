import Joi from "joi";



export const createFoodLogBodySchema = Joi.object({

    foodName: Joi.string().trim().required(),

    meal : Joi.string().optional(),

    quantity : Joi.number().positive().required(),

    consumedAt : Joi.date().iso().optional()
})


