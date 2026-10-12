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
    }).populate(
        "user",
        "username"
    )    
    .populate(
        "food",
        "name calories protein carbs fat servingSize"
    ).select("-user");

    return foodLog;
}


export const deleteFoodLogService = async (id) => {
    const foodLog = await FoodLog.findByIdAndDelete(id);


    if(!foodLog){
        throw constructorError(
            "No existe el alimento que se quiere eliminar", 404
        )
    }

    return foodLog;
}


export const updateFoodLogService = async (id, data) => {

    if(data.Food) {

        const food = await Food.findById(data.food);

        if(!food){
            throw constructorError(
                "La comida no existe",
                404
            );
        }
    }


    const foodLog = await Food.findByIdAndUpdate(id, data)

    if(!foodLog){
        throw constructorError(
            "El registro de alimento no existe",
            404
        );
    }

    return foodLog;

}


