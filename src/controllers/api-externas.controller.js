import { getRecipesByIngredientService } from "../services/api-externa.service.js";


export const getRecipesByIngredientController =
async (req, res, next) => {

    try {

        const { ingredient } = req.query;

        if (!ingredient) {
            return res.status(400).json({
                message: "Debe indicar un ingrediente"
            });
        }

        const recipes =
            await getRecipesByIngredientService(ingredient);

        return res.status(200).json({
            ingredient,
            total: recipes.length,
            recipes
        });

    } catch (error) {
        next(error);
    }
};