import {  deleteUserService, getUsersService, updateUserService } from "../services/user.services.js";


export const createUserController = async (req, res) => {
    const data = req.body
    const user  = await createUserService(data);
    return res.status(200).json(user);
}

export const deleteUserController = async (req,res) => {
    const id = req.body.id
    await deleteUserService(id);
    return res.status(204).send();
}


export const updateUserController = async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const user = await updateUserService(id, data);
    return res.status(204).json(user); 
}


export const replaceUserController = async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const user = await replaceUserService(id,data);
    return res.status(200).json(user);
}


// export const getUsersController = async (req, res) => {
//     try {
//         const users = await getUsersService();
//         res.status(200).json(users);
//     } catch (error){
//         res.status(500).json({message:error.message});
//     }
// }




