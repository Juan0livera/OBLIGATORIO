import Joi from "joi";

export const createFoodBodySchema = Joi.object({

    name: Joi.string().trim().min(2).max(100).required(),

    calories: Joi.number().min(0).required(),

    protein: Joi.number().min(0).required(),

    carbs: Joi.number().min(0).required(),

    fat: Joi.number().min(0).required(),

    servingSize: Joi.number().min(1).required(),

    category: Joi.string().required()
});


export const updateFoodBodySchema = Joi.object({

    name: Joi.string().trim().min(2).max(100).optional(),

    calories: Joi.number().min(0).optional(),

    protein: Joi.number().min(0).optional(),

    carbs: Joi.number().min(0).optional(),

    fat: Joi.number().min(0).optional(),

    servingSize: Joi.number().min(1).optional(),

    category: Joi.string().optional()

}).min(1);

