import { User } from '../models/user.model.js'
import { constructorError } from '../utils/constructorError.js';



export const getUsersService = async () => {
    return await User.find();
};

export const getUserByIdService = async (id) => {
    return await User.findById(id).select("-password");//esconde el password o con + lo muestra si en el esquema está oculto
};

export const getUserByEmail = async (data) => {
    return await User.findOne({email : data});
}

export const getUserByUsername = async (data) => {
    return await User.findOne({username : data});
}

export const updateUserService = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUserService = async (id) => {
    return await User.findByIdAndDelete(id);
};


export const replaceUserService = async (id, data) => {

    return await User.findOneAndReplace(
        { _id: id },
        data,
        {
            new: true,
            runValidators: true
        }
    ).select("-password");

};



export const upgradeUserPlanService = async (id) => {
    const user = await getUserByIdService(id);

    if(!user){
        throw constructorError ("No se ha encontrado usuario", 404)
    }

    if(user.plan === "premium"){
        throw constructorError ("El usuario ya tiene plan premium", 409);
    }

    user.plan = "premium";

    await user.save();

    return user
}