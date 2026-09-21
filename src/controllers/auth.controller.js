import { User } from "../models/user.model.js"
import { getUserByUsernameOrEmailService, createUserService } from "../services/auth.services.js";
import { generateAccessToken } from "../utils/token.utils.js";
import { hashear } from "../utils/validar-password.js";
import bcrypt from "bcryptjs";


export const register = async (req, res, next) => {
  try {
        const data = req.body;

        const user = await createUserService(data);

        const userData = {
            id: user._id,
            username: user.username,
            email: user.email,
            age: user.age,
            role: user.role,
            plan: user.plan
        }

        return res.status(201).json({
            user : userData
        });
        
        } catch(error) {
            next(error);
        }
}


export const login = async (req,res,next) => {

    try {

        const { identificador, password } = req.body;

        const user = await getUserByUsernameOrEmailService(identificador);

        console.log(req.body);
        console.log("Identificador:", req.body.identificador);
        console.log("Email:", req.body.email);

        if (!user) {
            return res.status(401).json({
                error: "Credenciales inválidas"
            });
        }

        const passwordValida = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordValida) {
            return res.status(401).json({
                error: "Credenciales inválidas"
            });
        }

   const data = {
            id: user._id,
            username: user.username,
            email: user.email,
            age: user.age,
            role: user.role,
            plan: user.plan
        };


    const token = generateAccessToken(data);

    return res.status(200).json({
        user,
        token
    });
    
    } catch (error) {

    return res.status(500).json({
        error: error.message
    });
    }
}











