import { getUserByEmail, getUserByUsername } from "./user.services.js";
import { constructorError } from "../utils/constructorError.js";
import { User } from "../models/user.model.js";
import { generateAccessTokenByUser } from "../utils/token.utils.js";
import bcrypt from "bcryptjs";

export const getUserByUsernameOrEmailService = async (identificador) => {
    return await User.findOne({
        $or: [
            { email: identificador },
            { username: identificador }
        ]
    }).select("+password");
}


export const createUserService = async (data) => {
    
    const email = data.email;
    
    const userPorEmail = await getUserByEmail(email);

    if(userPorEmail){
       throw constructorError(
            "El usuario ya está registrado",
            409
        );
    }
    
    const userPorUsername = await getUserByUsername(data.username);

    if (userPorUsername) {
        throw constructorError(
            "El usuario ya está registrado",
            409
        );
    }
    
    
    const passwordHash = await bcrypt.hash(data.password, 10);

    const user = await User.create({
        ...data,
        password: passwordHash
    });
    
    return user;
}


export const generarTokenAuthService = (user) => {
        return generateAccessTokenByUser(user);
}


export const loginService = async (userBody) => {
    const errorCredencialInvalida = constructorError("Credencial Invalida", 401);

    if (!userBody) {
        throw errorCredencialInvalida;
    }

    const user = await getUserByUsernameOrEmailService(userBody.identificador);

    if (!user) {
        throw errorCredencialInvalida;
    }

    //si existe comparamos passwords 
    const passwordValida = await bcrypt.compare(
        userBody.password,
        user.password
    );


    if (!passwordValida) {
        throw errorCredencialInvalida;
    }


    return user;
    
}
