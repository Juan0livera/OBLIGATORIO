import { createFoodLogService, deleteFoodLogService, getFoodLogByUserService } from "../services/foodLog.services.js";




export const createFoodLogController = async (req, res, next) => {
    const data = req.body
    const userId = req.user.id;
    const foodToLog = await createFoodLogService(data, userId);
    return res.status(201).json(foodToLog);
}



export const getAllFoodLogByUserController = async ( req, res, next) => {
    const userId = req.user.id;

    const foodLogs = await getFoodLogByUserService(userId);

    return res.status(200).json(foodLogs);
}


export const deleteFoodLogContoller = async (req, res, next) => {
    const { id } = req.params;
    await deleteFoodLogService(id);
    return res.status(204).send();
}