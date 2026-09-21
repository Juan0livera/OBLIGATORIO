import { createCategoryService, deleteCategoryService, getAllCategoriesService, getCategoryByIdService, updateCategoryService } from "../services/categories.services.js";



export const createCategoryController = async (req, res, next) =>{
    try{
        const category = await createCategoryService(req.body);
        return res.status(201).json(category);
    } catch (error){
        next(error);
    }
}

export const updateCategoryController = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;

    const category = await updateCategoryService(id, data);
    return res.status(200).json(category);
}

export const deleteCategoryController = async (req,res, next) => {
    try {

        const { id } = req.params;

        await deleteCategoryService(id);

        return res.status(204).send();

    } catch (error) {
        next(error);
    }
}

export const getAllCategoriesController = async (req, res, next) => {
    try {
        const categories = await getAllCategoriesService();
        return res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
}

export const getCategoryByIdController = async (req,res,next) => {
    try{
        const { id } = req.params
        const category = await getCategoryByIdService(id);
        return res.status(200).json(category);
    } catch(error){
        next(error);
    }
}