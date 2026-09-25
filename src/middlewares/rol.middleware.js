import { Role } from "../constants/constants.role";
import { constructorError } from "../utils/constructorError";

const  validateRolMiddleware = (rol) =>{
    return (req,res, next) => {
        const usuario = req.user;
        const rolUsuario = usuario.rol;

        if(rol != rolUsuario){
            const errorSinRol = constructorError("No tienes el rol necesario", 403);
            next(errorSinRol);
        }
        next();
    }
}

export const validarRolAdminMiddleware = validateRolMiddleware(Role.admin);