import { validateRequired } from "./validate.middleware.js";
import  { loginBodySchema, registerBodySchema } from "../schemas/auth.schemas.js"
import { verifyAccessToken } from "../utils/token.utils.js";


export const middlewareValidateLoginBody = validateRequired(loginBodySchema, "body");

export const middlewareValidateRegisterBody = validateRequired(registerBodySchema, "body")


export const authMiddleware = (req, res , next) => {
    try {

        const authHeder = req.headers.authorization;   
        if(!authHeder) {
            return res.status(401).json({error : "no se recibio token"});
        }

        // Sacar el bearer
        if(!authHeder?.startsWith("Bearer ")){
            return res.status(401).json({error: "Token no proporcionado"});
        }

        const token = authHeder.split("")[1];

        const decoded = verifyAccessToken(token);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ error: "invalid token"});
    }
}