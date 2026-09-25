import { Category } from "../models/categories.model.js";
import { constructorError } from "../utils/constructorError.js";
import { Food } from "../models/food.model.js"
import { getUserByIdService } from "./user.services.js";

export const createFoodService = async (data, userId) => {
    const category = await Category.findById(data.category);



    if(!category){
        throw constructorError("La categoria no existe", 404);
    }

    const user = await getUserByIdService(userId);

    if (!user) {
        throw constructorError(
            "Usuario no encontrado",
            404
        );
    }


    if(user.plan == "plus"){
        const cantidadAlimentos = await Food.countDocuments({
            createdBy : user
        })

        if(cantidadAlimentos > 4 ){
            throw constructorError("Los usuarios plus solo pueden crear hasta 4 alimentos",403);
        }
    }

    
    const food = await Food.create({
        ...data,
        createdBy: userId
    })

    return food;
}

export const getAllFoodsService = async () => {

    return await Food.find()
        .populate("category")
        .populate("createdBy", "-password");

};


export const getFoodByIdService = async (id) => {

    const food = await Food.findById(id)
        .populate("category");

    if (!food) {
        throw constructorError(
            "Alimento no encontrado",
            404
        );
    }

    return food;
};


export const updateFoodService = async (id, data) => {

    if (data.category) {

        const category = await Category.findById(data.category);

        if (!category) {
            throw constructorError(
                "La categoría no existe",
                404
            );
        }
    }

    const food = await Food.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true
        }
    );

    if (!food) {
        throw constructorError(
            "Alimento no encontrado",
            404
        );
    }

    return food;
};


export const deleteFoodService = async (id) => {

    const food = await Food.findByIdAndDelete(id);

    if (!food) {
        throw constructorError(
            "Alimento no encontrado",
            404
        );
    }

    return food;
};