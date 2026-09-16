import { User } from '../models/user.model.js'



export const getUsersService = async () => {
    return await User.find();
};

export const getUserById = async (id) => {
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

