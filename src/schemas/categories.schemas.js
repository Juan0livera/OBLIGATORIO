import Joi from "joi";



export const createCategoryBodySchema = Joi.object({
    name : Joi.string().trim().min(3).max(50).required(),
    description : Joi.string().trim().max(256).optional()
})

export const updateCategoryBodySchema = Joi.object({
    name : Joi.string().trim().min(3).max(50).optional(),
    description : Joi.string().trim().max(256).optional(),
}).min(1) 

//para hacer PATCH tiene que mandar por lo menos una propiedad.

