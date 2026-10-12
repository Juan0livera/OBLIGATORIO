import { Food } from "../models/food.model.js"
import { getFoodByIdService } from  "../services/food.services.js"
import { constructorError } from "../utils/constructorError.js";
import { FoodLog } from "../models/foodLog.model.js";

export const createFoodLogService = async (data, userId) => {

    const food = await Food.findOne({
        name: data.foodName
    });

    if (!food) {
        throw constructorError(
            "Comida no encontrada",
            404
        );
    }

    const foodLog = await FoodLog.create({
        user: userId,
        food: food.id,
        meal: data.meal,
        quantity: data.quantity,
        consumedAt: data.consumedAt
    });

    return foodLog;
};


export const getFoodLogByUserService = async (userId) => {
    const foodLog = await FoodLog.findOne({
        user : userId
    })

    return foodLog;
}


