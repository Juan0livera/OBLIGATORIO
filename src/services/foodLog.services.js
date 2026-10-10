import { Food } from "../models/food.model.js"
import { getFoodByIdService } from  "../services/food.services.js"
import { constructorError } from "../utils/constructorError.js";
import { FoodLog } from "../models/foodLog.model.js";






export const createFoodLogService =  async (data, userId) =>{

    const foodToLog = await getFoodByIdService(data.food);

    if (!foodToLog){
        throw constructorError(
            "Comida no encontrada", 
            404
        )
    }


    const foodLog = await FoodLog.create({
        user : userId,
        food : data.food,
        meal : data.meal,
        consumedAt : data.consumedAt
    })



    return foodLog;

    
}


