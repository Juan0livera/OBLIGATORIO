import { User } from "../models/user.model.js"
import { getUserByUsernameOrEmailService, createUserService, generarTokenAuthService, loginService } from "../services/auth.services.js";
import { constructorError } from "../utils/constructorError.js";
import { generateAccessTokenByUser } from "../utils/token.utils.js";
import { hashear } from "../utils/validar-password.js";
import bcrypt from "bcryptjs";


export const register = async (req, res, next) => {
    const data = req.body;
    const user = await createUserService(data);
    const token =  generarTokenAuthService(user);
    return res.status(201).json({
        user,
        token
    });
}


export const login = async (req,res,next) => {

    const userBody = req.body;
    const user = await loginService(userBody);
    const token =  generarTokenAuthService(user);
    return res.status(200).json({
        user,
        token
    });
    
}











