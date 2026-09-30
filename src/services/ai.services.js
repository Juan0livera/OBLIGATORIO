import { openai } from "../config/openai.config.js";
import { Food } from "../models/food.model.js";
import { constructorError } from "../utils/constructorError.js";


export const analyzeFoodWithAIService = async (foodId) => {

    const food = await Food.findById(foodId)
        .populate("category", "name");

    if (!food) {
        throw constructorError(
            "Alimento no encontrado",
            404
        );
    }


const prompt = `
    Analiza brevemente este alimento utilizando únicamente
    los datos proporcionados.

    Alimento: ${food.name}
    Porción: ${food.servingSize} gramos
    Calorías: ${food.calories}
    Proteínas: ${food.protein} g
    Carbohidratos: ${food.carbs} g
    Grasas: ${food.fat} g
    Categoría: ${food.category?.name ?? "Sin categoría"}

    Devuelve una explicación breve y fácil de entender
    sobre su perfil nutricional y posibles usos dentro de
    una alimentación general.

    No inventes valores nutricionales que no fueron proporcionados.
    No realices diagnósticos médicos.`;
    try {

        const response = await openai.responses.create({
            model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
            input: prompt
        });

        return {
            food: food.name,
            aiAvailable: true,
            analysis: response.output_text
        };

    } catch (error) {

        console.error(
            "Servicio de IA no disponible:",
            error.message
        );

        return {
            food: food.name,
            aiAvailable: false,
            analysis: null,
            message: "El análisis con IA no está disponible temporalmente"
        };
    }
};