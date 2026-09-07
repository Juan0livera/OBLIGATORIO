import { getUsersService } from "../services/user.services";


export const getUsersController = async (req, res) => {
    try {
        const users = await getUsersService();
        res.status(200).json(users);
    } catch (error){
        res.status(500).json({message:error.message});
    }
}