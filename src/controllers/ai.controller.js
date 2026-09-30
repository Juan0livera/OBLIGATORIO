import {    analyzeFoodWithAIService } from "../services/ai.services.js";


export const analyzeFoodWithAIController =
async (req, res, next) => {

    try {

        const { id } = req.params;

        const result =
            await analyzeFoodWithAIService(id);

        return res.status(200).json(result);

    } catch (error) {
        next(error);
    }
};