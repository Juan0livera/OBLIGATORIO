import axios from "axios";

const apiExterna = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1",
    headers: {
        "Content-Type": "application/json"
    }
});


export const getRecipesByIngredientService = async (ingredient) => {

    const response = await apiExterna.get("/filter.php", {
        params: {
            i: ingredient
        }
    });

     const meals = response.data.meals || [];

    return meals.map(meal => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb
    }));
};