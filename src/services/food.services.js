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

export const getAllFoodsService = async ({name, category, minCalories, maxCalories, page = 1, limit = 10}) => {


    const filtros = {};

    if(name){
        filtros.name = {
            $regex: name,
            $options: "i"
        };
    }


    if(category){
        filtros.category = category;
    }

    if(minCalories || maxCalories){
        filtros.calories = {};

        if (minCalories !== undefined) {
            filtros.calories.$gte = Number(minCalories);
        }

        if (maxCalories !== undefined) {
            filtros.calories.$lte = Number(maxCalories);
        }
    }

    if (maxCalories) {
        filtros.calories.$lte = Number(maxCalories);
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    const foods = await Food.find(filtros)
        .populate("category", "name description")
        .populate("createdBy", "username email")
        .skip(skip)
        .limit(limitNumber);
    const total = await Food.countDocuments(filtros);


    return {
        foods,
        pagination: {
            total,
            page: pageNumber,
            limit: limitNumber,
            totalPages: Math.ceil(total / limitNumber)
        }
    }

    // return await Food.find()
    //     .populate("category")
    //     .populate("createdBy", "-password");

};


export const getFoodByIdService = async (id) => {
    
    
    if (!mongoose.isValidObjectId(id)) {
        throw constructorError(
            "El id de alimento no es válido",
            400
        );
    }


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