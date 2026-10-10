import { createFoodLogService } from "../services/foodLog.services.js";




export const createFoodLogController = async (req, res, next) => {
    const data = req.body
    const userId = req.user.id;
    const foodToLog = await createFoodLogService(data, userId);
    return res.status(201).json(foodToLog);
}