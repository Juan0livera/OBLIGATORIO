import {
    createFoodService,
    getAllFoodsService,
    getFoodByIdService,
    updateFoodService,
    deleteFoodService
} from "../services/food.services.js";


export const createFoodController = async (req, res, next) => {
    const data = req.body;
    const userId = req.user.id;
    const food = await createFoodService(data, userId);
    return res.status(201).json(food);
}


export const getAllFoodsController = async (req,res, next) =>{
    
    const {
        name,
        category,
        minCalories,
        maxCalories,
        page = 1,
        limit = 10
    } = req.query;


    const resultado = await getAllFoodsService({
        name,
        category,
        minCalories,
        maxCalories,
        page,
        limit
    });


    return res.status(200).json(resultado);
}

export const getFoodByIdController = async (req, res, next) => {
    const { id } = req.params;
    const food = await getFoodByIdService(id);
    return res.status(200).json(food);
}


export const updateFoodController = async (req, res, next) =>{
    const { id } = req.params;
    const data = req.body;

    const food = await updateFoodService(id,data);
    return res.status(200).json(food);
}

export const deleteFoodController = async (req,res,next) =>{
    const {id} = req.params;
    await deleteFoodService(id);
    return res.status(204).send();
}