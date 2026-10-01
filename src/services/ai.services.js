import { gemini } from "../config/gemini.config.js";
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
                    Analiza brevemente el siguiente alimento.

                    Nombre: ${food.name}
                    Porción: ${food.servingSize} gramos
                    Calorías: ${food.calories}
                    Proteínas: ${food.protein} gramos
                    Carbohidratos: ${food.carbs} gramos
                    Grasas: ${food.fat} gramos
                    Categoría: ${food.category?.name || "Sin categoría"}

                    Explica de forma sencilla su perfil nutricional.

                    No inventes valores nutricionales.
                    No realices diagnósticos médicos.
                    La respuesta debe ser breve.
                    `;

    try {
        
        const response = await gemini.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        return {
            food: food.name,
            aiAvailable: true,
            analysis: response.text
        };

    } catch (error) {

        console.error(
            "Error al consultar Gemini:",
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