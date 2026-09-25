import Joi from "joi";
import { Roles } from "../constants/constants.role.js";

// no validamos los campos como plan o role porque se asignan por defecto.
export const registerBodySchema = Joi.object({
    username : Joi.string().min(3).max(30).label("usuario").required(),
    email : Joi.string().email().required(),
    age : Joi.number().integer().min(1).optional(),
    password : Joi.string().required(),
    confirmPassword : Joi.string().valid(Joi.ref("password")).required()
})


export const loginBodySchema = Joi.object({
    identificador: Joi.alternatives().try (
        Joi.string().email(),
        Joi.string().alphanum().min(3)
    ).required(),
    password : Joi.string().min(8).required()
});


export const roleSchema = Joi.object({
    role: Joi.string().valid(...Roles).required()
})