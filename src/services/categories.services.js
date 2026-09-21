import { Category } from '../models/categories.model.js';
import { constructorError } from '../utils/constructorError.js';


// c
export const createCategoryService = async(data) => {

    //validamos si ya eiste alguna categoria
    const existeCategoria = await getCategoryByNameService(data.name);

    if(existeCategoria){
        throw constructorError(
            "La categoria ya existe", 
            409
        )
    }


    const category = await Category.create({
        ...data,
    });
    return category;
}

// u
export const updateCategoryService = async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, {new : true, runValidators: true});
}

// d
export const deleteCategoryService = async (id) => {
    return await Category.findByIdAndDelete(id);
}

// r
export const getCategoryByNameService = async (name) => {
    return await Category.findOne({ name });
}

// r
export const getAllCategoriesService = async () => {
    return await Category.find();
}

// r
export const getCategoryByIdService = async (id)=> {
    const category = await Category.findById(id);

    if (!category) {
        throw constructorError(
            "Categoría no encontrada",
            404
        );
    }

    return category;
}