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
    const foods = await getAllFoodsService();
    return res.status(200).json(foods);
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
    return res.status(200).send();
}