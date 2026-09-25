import { validateRequired } from "./validate.middleware.js";
import  { loginBodySchema, registerBodySchema, roleSchema } from "../schemas/auth.schemas.js"
import { verifyAccessToken } from "../utils/token.utils.js";


export const middlewareValidateLoginBody = validateRequired(loginBodySchema, "body");
export const middlewareValidateRegisterBody = validateRequired(registerBodySchema, "body")
export const validateRolesMiddleware = validateRequired(roleSchema, "body")


export const authMiddleware = (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                error: "No se recibió token"
            });
        }

        if (!authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                error: "Token no proporcionado"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = verifyAccessToken(token);

        req.user = decoded;

        next();

    } catch (error) {

        console.log("ERROR TOKEN:", error.message);

        return res.status(401).json({
            error: "invalid token"
        });
    }
};